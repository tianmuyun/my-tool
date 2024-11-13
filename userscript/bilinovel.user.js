// ==UserScript==
// @name         哔哩轻小说
// @namespace    http://tampermonkey.net/
// @version      20241113
// @description  复制限制解除，修改字体
// @author       tianmuyun
// @match        https://www.linovelib.com/novel/*
// @icon         https://www.linovelib.com/favicon.ico
// @grant        none
// ==/UserScript==

(function () {
    "use strict";  // 启用严格模式，确保代码遵循更严格的语法规则

    // 查找页面中所有 class 为 onselectstart 的元素
    var onSelectStartElements = document.querySelectorAll(".onselectstart");

    // 遍历所有查找到的元素，移除它们的 onselectstart 属性
    onSelectStartElements.forEach(function (element) {
        // 移除 onselectstart 属性，解除复制限制
        element.removeAttribute("onselectstart");
    });

    // 查找页面中所有 class 为 read-content 的元素
    var readContentElements = document.querySelectorAll(".read-content");

    // 遍历所有找到的 read-content 元素
    readContentElements.forEach(function (element) {
        // 修改元素的样式
        element.style.fontSize = "20px";
        element.style.color = "#000";
        // element.style.fontFamily = "宋体";
        // element.style.fontWeight = "Bold";
    });
})();
