"use strict";

var scrollToTopBtn = document.getElementById("top-btn")

var rootElement = document.documentElement

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

scrollToTopBtn.addEventListener("click", scrollToTop);