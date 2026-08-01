import { spawnSync } from "node:child_process";
import { readdirSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
const beginnerRoot=fileURLToPath(new URL("..",import.meta.url)),runner=fileURLToPath(new URL("./run.mjs",import.meta.url));
const requested=process.argv[2]??"",allDays=discoverDays(),requestedDay=requested?normalizeDay(requested):"";
if(process.argv.length>3||(requested&&!requestedDay)){console.error("用法：npm run beginner:verify [-- day10]");process.exitCode=1;}
else if(requestedDay&&!allDays.includes(requestedDay)){console.error(`没有找到 ${requestedDay}。`);process.exitCode=1;}
else{const days=requestedDay?[requestedDay]:allDays,failures=[];for(const day of days){const targets=[["example",""]];for(const id of discoverExercises(day))targets.push(["solution",id]);for(const [mode,id] of targets){const result=run(mode,day,id);const label=`${day} ${id||mode}`;if(result.ok)console.log(`✓ ${label}`);else{console.error(`\n✗ ${label}`);if(result.message)console.error(result.message);if(result.stdout.trim())console.error(result.stdout.trimEnd());if(result.stderr.trim())console.error(result.stderr.trimEnd());failures.push(label);}}}if(failures.length){console.error(`\nFAIL：${failures.length} 项未通过：${failures.join("、")}。`);process.exitCode=1;}else console.log(`\nPASS：${formatRange(days)} 的 example 与全部独立练习完整参考答案均通过类型检查和输出验证。`);}
function run(mode,day,id){const args=[runner,mode,day];if(id)args.push(id);const result=spawnSync(process.execPath,args,{cwd:path.dirname(beginnerRoot),encoding:"utf8",timeout:120000,maxBuffer:1024*1024,windowsHide:true});if(result.error)return{ok:false,message:result.error.message,stdout:"",stderr:""};return{ok:result.status===0,message:result.status===0?"":`子进程退出码：${result.status??"未知"}`,stdout:result.stdout??"",stderr:result.stderr??""};}
function discoverDays(){return readdirSync(beginnerRoot,{withFileTypes:true}).filter((e)=>e.isDirectory()&&/^day\d{2}$/.test(e.name)).map((e)=>e.name).sort();}
function discoverExercises(day){return readdirSync(path.join(beginnerRoot,day),{withFileTypes:true}).filter((e)=>e.isDirectory()&&/^practice\d{2}$/.test(e.name)).map((e)=>e.name).sort();}
function normalizeDay(input){const m=/^(?:day)?(\d{1,2})$/i.exec(input.trim());return m?`day${m[1].padStart(2,"0")}`:"";}
function formatRange(days){return days.length===1?days[0].replace("day","Day "):`Day ${days[0].slice(3)}–${days.at(-1).slice(3)}`;}
