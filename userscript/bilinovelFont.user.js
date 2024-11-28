// ==UserScript==
// @name         哔哩轻小说字体修改
// @namespace    http://tampermonkey.net/
// @version      2024-11-19
// @description  小说内容页：移除文本选中限制；自定义字体。
// @author       tianmuyun
// @match        https://www.linovelib.com/novel/*/*
// @icon         https://www.linovelib.com/favicon.ico
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function () {
  "use strict";
  // 移除文本选中限制
  function removeOnSelectStart() {
    var body = document.querySelector("body");
    body.removeAttribute("onselectstart");
  }
  // 修改字体
  function Font(FontFamily) {
    var title = document.getElementById("mlfy_main_text");
    var text = document.getElementById("TextContent");
    if (title) {
      title.style.fontSize = "24px";
      title.style.color = "#000";
      title.style.fontFamily = FontFamily;
    }
    if (text) {
      text.style.fontSize = "20px";
      text.style.color = "#000";
      text.style.fontFamily = FontFamily;
    }
  }
  // 获取保存的字体
  function getSavedFont() {
    return GM_getValue("FontFamily", "Microsoft YaHei");
  }

  // 设置字体并保存到本地存储
  function setFontAndSave(FontFamily) {
    Font(FontFamily);
    GM_setValue("FontFamily", FontFamily);
  }
  // 添加一个菜单命令让用户输入自定义字体
  function promptForCustomFont() {
    var customFont = prompt(
      "请输入自定义字体："
    );
    if (customFont) {
      setFontAndSave(customFont);
    }
  }
  // 注册脚本菜单
  GM_registerMenuCommand("字体：霞鹜文楷", function () {
    setFontAndSave("霞鹜文楷 Medium");
  });
  GM_registerMenuCommand("字体：微软雅黑", function () {
    setFontAndSave("Microsoft YaHei");
  });
  GM_registerMenuCommand("自定义字体", function () {
    promptForCustomFont();
  });
  // 初始化函数
  function init() {
    // 获取并应用保存的字体设置
    var savedFont = getSavedFont();
    setFontAndSave(savedFont);
  }
  removeOnSelectStart();
  init();
})();
