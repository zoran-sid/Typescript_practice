import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";
import ts from "typescript";
const beginnerRoot=fileURLToPath(new URL("..",import.meta.url)),errors=[];
const days=readdirSync(beginnerRoot,{withFileTypes:true}).filter((e)=>e.isDirectory()&&/^day\d{2}$/.test(e.name)).map((e)=>e.name).sort();
const expectedDays=Array.from({length:33},(_,i)=>`day${String(i).padStart(2,"0")}`);
if(days.join(",")!==expectedDays.join(","))errors.push("课程目录必须从 day00 连续到 day32。");
for(const day of expectedDays){
 const dir=path.join(beginnerRoot,day);if(!existsSync(dir))continue;
 for(const file of ["README.md","example.ts"])if(!existsSync(path.join(dir,file)))errors.push(`${day} 缺少 ${file}。`);
 for(const legacy of ["practice.ts","solution.ts","SOLUTION.md"])if(existsSync(path.join(dir,legacy)))errors.push(`${day} 根目录仍有旧入口 ${legacy}。`);
 const readmePath=path.join(dir,"README.md"),readme=existsSync(readmePath)?readFileSync(readmePath,"utf8"):"";
 if(countText(readme,"```mermaid")!==1||!readme.includes("flowchart TD"))errors.push(`${day}/README.md 必须有且只有一个 Example Mermaid 流程图。`);
 const badExample=readSection(readme,"### 错误代码示例"),goodExample=readSection(readme,"### 正确写法");
 if(countText(readme,"### 错误代码示例")!==1||!badExample.includes("```ts")||!badExample.includes("// ❌"))errors.push(`${day}/README.md 必须有且只有一个带 // ❌ 注释的 TypeScript 错误代码示例。`);
 if(countText(readme,"### 正确写法")!==1||!goodExample.includes("```ts")||!goodExample.includes("// ✅"))errors.push(`${day}/README.md 必须有且只有一个与错误示例对应的 TypeScript 正确写法。`);
 if(!readme.includes("## 独立练习导航"))errors.push(`${day}/README.md 缺少独立练习导航。`);
 const dirs=readdirSync(dir,{withFileTypes:true}).filter((e)=>e.isDirectory()&&/^practice\d{2}$/.test(e.name)).map((e)=>e.name).sort();
 if(dirs.length<1||dirs.length>3)errors.push(`${day} 必须有 1–3 个 practiceXX 目录。`);
 dirs.forEach((id,index)=>{const expected=`practice${String(index+1).padStart(2,"0")}`;if(id!==expected)errors.push(`${day} 练习目录必须连续，缺少 ${expected}。`);const pdir=path.join(dir,id);for(const file of ["README.md","practice.ts","solution.ts","SOLUTION.md"])if(!existsSync(path.join(pdir,file)))errors.push(`${day}/${id} 缺少 ${file}。`);const pReadme=existsSync(path.join(pdir,"README.md"))?readFileSync(path.join(pdir,"README.md"),"utf8"):"";if(countText(pReadme,"```mermaid")!==1||!pReadme.includes("flowchart TD"))errors.push(`${day}/${id}/README.md 必须有且只有一个 Mermaid 流程图。`);const solutionPath=path.join(pdir,"solution.ts");if(existsSync(solutionPath)){const scaffold=readFileSync(solutionPath,"utf8");if(!/\bTODO\b/.test(scaffold))errors.push(`${day}/${id}/solution.ts 必须保留 TODO，不能提供完整答案。`);}const guidePath=path.join(pdir,"SOLUTION.md");if(existsSync(guidePath)){const guide=readFileSync(guidePath,"utf8");if(!guide.includes("本文件不提供完整答案"))errors.push(`${day}/${id}/SOLUTION.md 必须明确说明不提供完整答案。`);}const practicePath=path.join(pdir,"practice.ts");if(existsSync(practicePath)){const source=readFileSync(practicePath,"utf8"),parsed=ts.createSourceFile(practicePath,source,ts.ScriptTarget.Latest,true,ts.ScriptKind.TS);if(parsed.statements.length>0)errors.push(`${day}/${id}/practice.ts 必须只含注释，不能提供实现。`);const lines=source.split(/\r?\n/).filter((line)=>line.trim()).length;if(lines<2||lines>8)errors.push(`${day}/${id}/practice.ts 应只有 2–8 行简短注释。`);}});
 const checkPath=path.join(beginnerRoot,"checks",`${day}.mjs`);if(!existsSync(checkPath)){errors.push(`${day} 缺少检查配置。`);continue;}
 const check=(await import(pathToFileURL(checkPath).href)).default;
 if(!isRecord(check)){errors.push(`${day} 检查配置必须是对象。`);continue;}
 if(typeof check.title!=="string"||!check.title.trim())errors.push(`${day} 缺少 title。`);
 if(!isStringArray(check.exampleExpected))errors.push(`${day} exampleExpected 必须是字符串数组。`);
 if(!Array.isArray(check.exercises)||check.exercises.length!==dirs.length)errors.push(`${day} 检查题数与练习目录数不一致。`);
 else check.exercises.forEach((exercise,index)=>{const id=dirs[index];if(!isRecord(exercise)||exercise.id!==id)errors.push(`${day} 第 ${index+1} 个检查 id 必须是 ${id}。`);if(!isStringArray(exercise?.expected))errors.push(`${day}/${id} expected 必须是字符串数组。`);if(typeof exercise?.success!=="string"||!exercise.success.trim())errors.push(`${day}/${id} 缺少 success。`);});
}
if(errors.length){console.error("课程结构审计未通过：");errors.forEach((error)=>console.error(`  - ${error}`));process.exitCode=1;}else console.log("PASS：Day00–32 的 example 与 69 道独立练习均有流程图、空白作答入口、带 TODO 的解题结构和匹配检查。");
function countText(text,needle){return text.split(needle).length-1;}
function readSection(text,heading){const start=text.indexOf(heading);if(start<0)return "";const bodyStart=start+heading.length,rest=text.slice(bodyStart);const next=rest.search(/\n#{1,3} /);return next<0?rest:rest.slice(0,next);}
function isRecord(value){return value!==null&&typeof value==="object"&&!Array.isArray(value);}
function isStringArray(value){return Array.isArray(value)&&value.every((item)=>typeof item==="string");}
