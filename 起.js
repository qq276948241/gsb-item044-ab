const http = require("http");
const fs = require("fs");
const path = require("path");

const 端口 = 18440;
const 类型 = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8"
};

http.createServer(function (请求, 响应) {
  var 路径 = 请求.url.split("?")[0];
  if (路径 === "/") 路径 = "/index.html";
  var 文件 = path.join(__dirname, 路径);
  if (!文件.startsWith(__dirname)) {
    响应.writeHead(403);
    响应.end();
    return;
  }
  fs.readFile(文件, function (错, 数据) {
    if (错) {
      响应.writeHead(404);
      响应.end("找不到");
      return;
    }
    响应.writeHead(200, { "Content-Type": 类型[path.extname(文件)] || "text/plain; charset=utf-8" });
    响应.end(数据);
  });
}).listen(端口, "0.0.0.0", function () {
  process.stdout.write("已拉起 " + 端口 + "\n");
});
