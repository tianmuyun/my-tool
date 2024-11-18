// ==UserScript==
// @name         哔哩轻小说字体修改
// @namespace    http://tampermonkey.net/
// @version      2024-11-18
// @description  移除文本选中解除，修改字体
// @author       tianmuyun
// @match        https://www.linovelib.com/novel/*
// @icon         https://www.linovelib.com/favicon.ico
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  function removeOnSelectStart() {
    var body = document.querySelector("body");
    body.removeAttribute("onselectstart");
  }
  function titleFont() {
    var targetElement = document.getElementById("mlfy_main_text");
    if (targetElement) {
      targetElement.style.fontSize = "24px";
      targetElement.style.color = "#000";
      targetElement.style.fontFamily = "霞鹜文楷 Medium";
    }
  }
  function textFont() {
    var targetElement = document.getElementById("TextContent");
    if (targetElement) {
      targetElement.style.fontSize = "20px";
      targetElement.style.color = "#000";
      targetElement.style.fontFamily = "霞鹜文楷 Medium";
    }
  }
  removeOnSelectStart();
  titleFont();
  textFont();
})();
