// ==UserScript==
// @name         哔哩轻小说展开简介
// @namespace    http://tampermonkey.net/
// @version      2024-11-25
// @description  小说详情页：添加展开简介
// @author       tianmuyun
// @match        https://www.linovelib.com/novel/*
// @exclude      https://www.linovelib.com/novel/*/*
// @icon         https://www.linovelib.com/favicon.ico
// @grant        none
// @updateURL    https://raw.githubusercontent.com/tianmuyun/mytoolbox/main/userscript/bilinovelDec.user.js
// @downloadURL  https://raw.githubusercontent.com/tianmuyun/mytoolbox/main/userscript/bilinovelDec.user.js
// ==/UserScript==

(function () {
  "use strict";

  // 获取书籍简介
  function getBookDec() {
    // 获取 class="book-dec Jbook-dec hide" 的 div 元素
    const bookDecDiv = document.querySelector(".book-dec.Jbook-dec.hide");
    if (bookDecDiv) {
      // 使用 :scope 来限制只在当前 div 内查找 p 标签
      const pTag = bookDecDiv.querySelector(":scope > p"); // 只获取直接子级的 p 标签
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

  // 添加展开简介按钮
  function addBtn() {
    const btnGroupDiv = document.querySelector(".btn-group");
    if (btnGroupDiv) {
      const btn = document.createElement("button");
      btn.textContent = "展开简介";
      btn.style.padding = "6px 12px";
      btn.style.fontSize = "14px";
      btn.style.cursor = "pointer";
      btn.style.marginLeft = "10px";
      btn.addEventListener("click", getBookDec); // 为按钮添加点击事件
      btnGroupDiv.appendChild(btn);
    }
  }

  // 调用添加按钮的函数
  addBtn();
})();
