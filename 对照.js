const assert = require("assert");
const { 分温 } = require("./分温.js");

function 核对(名字, 底, 顶, 期望) {
  const 得到 = 分温(底, 顶).出;
  if (得到 !== 期望) {
    process.stderr.write(名字 + "没对上\n");
    process.exit(1);
  }
}

核对("现有", "1000", "1220", "正烧");
process.stdout.write("对照通过\n");
