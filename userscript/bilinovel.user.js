// ==UserScript==
// @name         哔哩轻小说增强
// @namespace    http://tampermonkey.net/
// @version      2024-11-29
// @description  详情页：添加展开简介。内容页：移除文本选中限制；自定义字体。
// @author       tianmuyun
// @match        https://www.linovelib.com/novel/*
// @icon         https://www.linovelib.com/favicon.ico
// @grant        GM_registerMenuCommand
// ==/UserScript==
(function () {
  "use strict";

  // 获取当前页面的 URL
  const currentUrl = window.location.href;
  const introduceURL = /www\.linovelib\.com\/novel\/\d+.html/;
  const contentURL = /www\.linovelib\.com\/novel\/\d+\/\d+.html/;
  // 执行对应函数
  if (introduceURL.test(currentUrl)) {
    GM_registerMenuCommand("添加简介按钮");
    addIntroBtn();
  } else if (contentURL.test(currentUrl)) {
    GM_registerMenuCommand("移除文本选中限制");
    GM_registerMenuCommand("修改字体");
    removeOnSelectStart();
    modifyFont("霞鹜文楷 Medium");  // 修改字体
  } else {
    GM_registerMenuCommand("未执行脚本");
  }

  // 获取小说简介
  function getIntro() {
    const bookDecDiv = document.querySelector(".book-dec.Jbook-dec.hide");
    if (bookDecDiv) {
      const pTag = bookDecDiv.querySelector(":scope > p");
      if (pTag) {
        const text = pTag.textContent;
        alert(text);
      } else {
        alert("没有找到直接子级的 p 标签");
      }
    } else {
      alert("没有找到 class='book-dec Jbook-dec hide' 的 div 元素");
    }
  }
  // 添加简介按钮
  function addIntroBtn() {
    const btnGroupDiv = document.querySelector(".btn-group");
    if (btnGroupDiv) {
      const btn = document.createElement("button");
      btn.textContent = "展开简介";
      btn.style.padding = "6px 12px";
      btn.style.fontSize = "14px";
      btn.style.cursor = "pointer";
      btn.style.marginLeft = "10px";
      btn.addEventListener("click", getIntro); // 按钮绑定getIntro()
      btnGroupDiv.appendChild(btn);
    }
  }
  // 移除文本选中限制
  function removeOnSelectStart() {
    var body = document.querySelector("body");
    body.removeAttribute("onselectstart");
  }
  // 修改字体
  function modifyFont(FontFamily = "微软雅黑") {
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
})();
