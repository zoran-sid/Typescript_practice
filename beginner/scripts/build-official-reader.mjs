import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const workspaceRoot = fileURLToPath(new URL("../..", import.meta.url));
const cacheRoot = path.join(workspaceRoot, "official-reference");
const readerRoot = path.join(cacheRoot, "reader");

const sources = [
  {
    label: "英文 Handbook 与 Reference",
    source: path.join(
      cacheRoot,
      "typescript-website",
      "packages",
      "documentation",
      "copy",
      "en",
    ),
    destination: path.join(
      readerRoot,
      "typescript-website",
      "packages",
      "documentation",
      "copy",
      "en",
    ),
  },
  {
    label: "英文 TSConfig",
    source: path.join(
      cacheRoot,
      "typescript-website",
      "packages",
      "tsconfig-reference",
      "copy",
      "en",
    ),
    destination: path.join(
      readerRoot,
      "typescript-website",
      "packages",
      "tsconfig-reference",
      "copy",
      "en",
    ),
  },
  {
    label: "官方中文文档",
    source: path.join(
      cacheRoot,
      "typescript-localizations",
      "docs",
      "documentation",
      "zh",
    ),
    destination: path.join(
      readerRoot,
      "typescript-localizations",
      "docs",
      "documentation",
      "zh",
    ),
  },
  {
    label: "官方中文 TSConfig",
    source: path.join(
      cacheRoot,
      "typescript-localizations",
      "docs",
      "tsconfig",
      "zh",
    ),
    destination: path.join(
      readerRoot,
      "typescript-localizations",
      "docs",
      "tsconfig",
      "zh",
    ),
  },
];

let markdownCount = 0;
let assetCount = 0;
let twoslashFileCount = 0;
let convertedHoverMarkerCount = 0;

for (const source of sources) {
  if (!existsSync(source.source)) {
    console.error(`缺少 ${source.label}：${source.source}`);
    console.error("请先运行 npm run official:sync 下载官方文档。");
    process.exit(1);
  }

  mirrorDirectory(source.source, source.destination);
}

mkdirSync(readerRoot, { recursive: true });
writeFileSync(
  path.join(readerRoot, "README.md"),
  [
    "# TypeScript 官方文档本地阅读版",
    "",
    "这里的文件由 `npm run official:sync` 自动生成，适合普通 Markdown 阅读器。",
    "",
    "- 官方 Git 克隆仍保存在同级 `typescript-website` 与 `typescript-localizations`，不会被修改。",
    "- 阅读版移除了网页 YAML 头信息、Twoslash 围栏参数和悬停定位标记。",
    "- 官网绝对链接已补成完整网址；相对链接和图片目录结构保持不变。",
    "- 每篇文档顶部都保留官网原文与克隆原始文件入口。",
    "- 内容版权与许可仍归原项目，TypeScript 文档内容采用 CC BY 4.0。",
    "",
    "不要直接编辑此目录；下次同步时，同名文件会重新生成。",
    "",
  ].join("\n"),
  "utf8",
);

console.log(
  `✓ Markdown 阅读版：${markdownCount} 篇文档，${assetCount} 个资源文件`,
);
console.log(
  `  已转换 ${twoslashFileCount} 篇 Twoslash 文档中的 ${convertedHoverMarkerCount} 个悬停定位标记`,
);
console.log(`  位置：${readerRoot}`);

function mirrorDirectory(sourceDirectory, destinationDirectory) {
  mkdirSync(destinationDirectory, { recursive: true });

  for (const entry of readdirSync(sourceDirectory, { withFileTypes: true })) {
    const sourcePath = path.join(sourceDirectory, entry.name);
    const destinationPath = path.join(destinationDirectory, entry.name);

    if (entry.isDirectory()) {
      mirrorDirectory(sourcePath, destinationPath);
      continue;
    }

    if (!entry.isFile()) continue;

    if (path.extname(entry.name).toLowerCase() === ".md") {
      const original = readFileSync(sourcePath, "utf8");
      const transformed = makeReaderFriendly(
        original,
        sourcePath,
        destinationPath,
      );
      writeFileSync(destinationPath, transformed, "utf8");
      markdownCount++;
      continue;
    }

    copyFileSync(sourcePath, destinationPath);
    assetCount++;
  }
}

function makeReaderFriendly(original, sourcePath, destinationPath) {
  const normalized = original
    .replace(/^\uFEFF/, "")
    .replaceAll("\r\n", "\n");
  const { metadata, body: bodyWithoutFrontmatter } =
    removeFrontmatter(normalized);
  const metadataTitle =
    metadata.title ?? metadata.display ?? metadata.header;
  const { title: bodyTitle, body: bodyWithoutTitle } =
    removeLeadingTitle(bodyWithoutFrontmatter, metadataTitle);
  const title =
    metadataTitle ??
    bodyTitle ??
    path.basename(sourcePath, ".md");
  const hasTwoslash = /^```[^\n]*\btw(?:o)?slash\b/m.test(
    bodyWithoutTitle,
  );
  const officialUrl = findOfficialUrl(metadata, sourcePath);
  const body = transformBody(bodyWithoutTitle, officialUrl);
  const rawRelativePath = toMarkdownPath(
    path.relative(path.dirname(destinationPath), sourcePath),
  );
  const links = [
    officialUrl ? `[官网原文](${officialUrl})` : undefined,
    `[克隆原始文件](<${rawRelativePath}>)`,
  ]
    .filter(Boolean)
    .join(" · ");
  const officialSummary = metadata.oneline ?? metadata.firstLine;
  const description = officialSummary
    ? `> **官方摘要**：${officialSummary.trim()}`
    : undefined;
  const twoslashNote = hasTwoslash
    ? "> 代码示例中的官网悬停定位标记、“预期错误”和编译设置已转换成普通说明。"
    : undefined;

  if (hasTwoslash) twoslashFileCount++;

  const lines = [
    `# ${title}`,
    "",
    "> **本地 Markdown 阅读版**：已清理官网页面元数据和专用展示语法，官方正文与代码语义保持不变。",
    `> ${links}`,
    "> 来源：Microsoft TypeScript Website / Localizations，文档内容遵循 CC BY 4.0。",
    description,
    twoslashNote,
    "",
    body.trim(),
    "",
  ].filter((line) => line !== undefined);

  return lines.join("\n").replace(/\n{3,}/g, "\n\n");
}

function removeFrontmatter(text) {
  if (!text.startsWith("---\n")) {
    return { metadata: {}, body: text };
  }

  const closingIndex = text.indexOf("\n---\n", 4);
  if (closingIndex < 0) {
    return { metadata: {}, body: text };
  }

  const rawMetadata = text.slice(4, closingIndex);
  const metadata = {};

  for (const line of rawMetadata.split("\n")) {
    const match = line.match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/);
    if (!match) continue;
    metadata[match[1]] = unquoteYamlValue(match[2]);
  }

  return {
    metadata,
    body: text.slice(closingIndex + "\n---\n".length).trimStart(),
  };
}

function removeLeadingTitle(body, metadataTitle) {
  const match = body.match(/^(#{1,2})\s+([^\n]+)\n+/);
  if (!match) return { title: undefined, body };

  if (metadataTitle) {
    const sameTitle =
      match[1] === "#" &&
      normalizeHeading(match[2]) === normalizeHeading(metadataTitle);
    if (!sameTitle) return { title: undefined, body };
  }

  return {
    title: match[2].trim(),
    body: body.slice(match[0].length),
  };
}

function normalizeHeading(value) {
  return value
    .trim()
    .replace(/[`_*]/g, "")
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function transformBody(body, officialUrl) {
  const output = [];
  let fenceMarker;
  let twoslashFence = false;
  let readingBlockquote = false;

  for (const line of body.split("\n")) {
    if (
      !fenceMarker &&
      !readingBlockquote &&
      /^\s*<blockquote\b[^>]*\bbg-reading\b[^>]*>\s*$/i.test(line)
    ) {
      readingBlockquote = true;
      continue;
    }

    if (
      !fenceMarker &&
      readingBlockquote &&
      /^\s*<\/blockquote>\s*$/i.test(line)
    ) {
      readingBlockquote = false;
      continue;
    }

    if (!fenceMarker && readingBlockquote) {
      output.push(convertReadingBlockquoteLine(line, officialUrl));
      continue;
    }

    const fence = line.match(/^( {0,3})(`{3,}|~{3,})(.*)$/);

    if (fence && !fenceMarker) {
      fenceMarker = fence[2];
      const info = fence[3].trim();
      const language = info.split(/\s+/)[0];
      twoslashFence = /\btw(?:o)?slash\b/.test(info);
      const websiteEnhancedFence =
        twoslashFence || /\btsconfig\b/.test(info);
      output.push(
        websiteEnhancedFence
          ? `${fence[1]}${fenceMarker}${language}`
          : line,
      );
      continue;
    }

    if (
      fence &&
      fenceMarker &&
      fence[2][0] === fenceMarker[0] &&
      fence[2].length >= fenceMarker.length &&
      fence[3].trim() === ""
    ) {
      output.push(line);
      fenceMarker = undefined;
      twoslashFence = false;
      continue;
    }

    if (fenceMarker) {
      const directive = twoslashFence
        ? transformTwoslashDirective(line)
        : line;
      if (directive !== undefined) output.push(directive);
      continue;
    }

    const heading = line.startsWith("# ") ? `#${line}` : line;
    output.push(rewriteWebsiteLinks(heading, officialUrl));
  }

  return output.join("\n").replace(/\n{4,}/g, "\n\n\n");
}

function convertReadingBlockquoteLine(line, officialUrl) {
  const content = line
    .trim()
    .replace(/<\/?p>/gi, "")
    .replace(/<br\s*\/?>/gi, "")
    .replace(
      /<a\s+href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi,
      "[$2]($1)",
    )
    .trim();
  if (!content) return ">";
  return `> ${rewriteWebsiteLinks(content, officialUrl)}`;
}

function transformTwoslashDirective(line) {
  if (/^\s*\/\/\s*@ts-(?:check|nocheck|ignore|expect-error)\b/.test(line)) {
    return line;
  }

  const hover = line.match(/^(\s*)\/\/\s*\^+\?\s*$/);
  if (hover) {
    convertedHoverMarkerCount++;
    return `${hover[1]}// ↑ 官网交互版会在这里显示上方表达式的推断类型`;
  }

  const completion = line.match(/^(\s*)\/\/\s*(?:\^+\||\|+\^?)\s*$/);
  if (completion) {
    convertedHoverMarkerCount++;
    return `${completion[1]}// ↑ 官网交互版会在这里显示代码补全信息`;
  }

  const cut = line.match(
    /^(\s*)\/\/\s*---(cut|cut-after|cut-before)---\s*$/,
  );
  if (cut) {
    const explanation =
      cut[2] === "cut-after"
        ? "下方是示例准备代码，正文主要关注上方"
        : "上方是示例准备代码，正文主要关注下方";
    return `${cut[1]}// —— ${explanation} ——`;
  }

  const errors = line.match(/^(\s*)\/\/\s*@errors?:\s*(.*)$/);
  if (errors) {
    const codes = errors[2]
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((code) => (code.startsWith("TS") ? code : `TS${code}`))
      .join("、");
    return `${errors[1]}// 官方示例预期这里出现类型错误：${codes}`;
  }

  const filename = line.match(/^(\s*)\/\/\s*@filename:\s*(.*)$/);
  if (filename) {
    return `${filename[1]}// 文件：${filename[2].trim()}`;
  }

  const noErrors = line.match(/^(\s*)\/\/\s*@noErrors\s*$/);
  if (noErrors) {
    return `${noErrors[1]}// 官方示例预期没有类型错误`;
  }

  const showEmit = line.match(
    /^(\s*)\/\/\s*@(?:showEmit|showEmittedFile)\s*$/,
  );
  if (showEmit) {
    return `${showEmit[1]}// 官网交互版会在这里展示编译后的 JavaScript；本地阅读版不生成该输出`;
  }

  const setting = line.match(
    /^(\s*)\/\/\s*@([A-Za-z][A-Za-z0-9_-]*)(?::\s*(.*))?$/,
  );
  if (setting) {
    const value = setting[3]?.trim();
    return `${setting[1]}// 示例编译设置：${setting[2]} = ${value || "true"}`;
  }

  return line;
}

function rewriteWebsiteLinks(line, officialUrl) {
  let rewritten = line
    .replace(
      /\]\(<(\/(?!\/)[^>]*)>\)/g,
      (_, target) => `](<https://www.typescriptlang.org${target}>)`,
    )
    .replace(
      /\]\((\/(?!\/)[^)]*)\)/g,
      (_, target) => `](https://www.typescriptlang.org${target})`,
    )
    .replace(
      /(\b(?:href|src)=["'])(\/(?!\/)[^"']*)(["'])/g,
      (_, prefix, target, suffix) =>
        `${prefix}https://www.typescriptlang.org${target}${suffix}`,
    )
    .replace(
      /^(\s*\[[^\]]+\]:\s*)(\/(?!\/)\S*)/,
      (_, prefix, target) =>
        `${prefix}https://www.typescriptlang.org${target}`,
    );

  if (!officialUrl) return rewritten;

  rewritten = rewritten
    .replace(
      /\]\(<((?![a-z][a-z0-9+.-]*:|\/|#)[^>]*\.html(?:[?#][^>]*)?)>\)/gi,
      (_, target) => `](<${new URL(target, officialUrl).href}>)`,
    )
    .replace(
      /\]\(((?![a-z][a-z0-9+.-]*:|\/|#)[^)\s]*\.html(?:[?#][^)]*)?)\)/gi,
      (_, target) => `](${new URL(target, officialUrl).href})`,
    );

  return rewritten;
}

function findOfficialUrl(metadata, sourcePath) {
  if (metadata.permalink?.startsWith("/")) {
    return `https://www.typescriptlang.org${metadata.permalink}`;
  }

  const normalized = toMarkdownPath(sourcePath);
  const tsconfigOption = normalized.match(
    /\/tsconfig-reference\/copy\/en\/options\/([^/]+)\.md$/,
  );
  if (tsconfigOption) {
    return `https://www.typescriptlang.org/tsconfig/${tsconfigOption[1]}.html`;
  }
  if (/\/tsconfig-reference\/copy\/en\/intro\.md$/.test(normalized)) {
    return "https://www.typescriptlang.org/tsconfig/";
  }

  return undefined;
}

function unquoteYamlValue(value) {
  const trimmed = value.trim();
  if (
    trimmed.length >= 2 &&
    ((trimmed.startsWith('"') && trimmed.endsWith('"')) ||
      (trimmed.startsWith("'") && trimmed.endsWith("'")))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function toMarkdownPath(value) {
  return value.replaceAll("\\", "/");
}
