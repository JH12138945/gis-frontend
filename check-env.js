import { execSync } from 'child_process';
const runCmd = (cmd) => {
  try {
    return execSync(cmd, { encoding: 'utf8' }).trim()
  } catch {
    return '未安装'
  }
}

console.log("========环境版本自检========")
console.log("Node    :", runCmd("node -v"))
console.log("Python  :", runCmd("python --version"))
console.log("Java    :", runCmd("java -version 2>&1 | findstr version"))
console.log("Git     :", runCmd("git --version"))
console.log("==========================")