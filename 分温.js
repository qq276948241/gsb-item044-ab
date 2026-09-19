function 分温(底, 顶) {
  if (底 === undefined || 顶 === undefined || 底 === null || 顶 === null) {
    return { 出: "缺温" };
  }
  底 = String(底);
  顶 = String(顶);
  if (底 === "" || 顶 === "") {
    return { 出: "缺温" };
  }
  function 整数(文本) {
    if (!/^[0-9]+$/.test(文本)) return null;
    if (文本.length > 1 && 文本[0] === "0") return null;
    var 数 = Number(文本);
    if (数 > 2000) return null;
    return 数;
  }
  var 低 = 整数(底);
  var 高 = 整数(顶);
  if (低 === null || 高 === null) return { 出: "温度不对" };
  if (低 > 高) return { 出: "温度倒着" };
  if (高 < 1180) return { 出: "欠烧" };
  if (高 <= 1260) return { 出: "正烧" };
  return { 出: "过烧" };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { 分温: 分温 };
}
