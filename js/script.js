"use strict";

const elements = document.querySelectorAll(".text span");

elements.forEach((span, index) => {
    const delay = 0.2 * (index + 1);
    span.style.animationDelay = `${delay}s`;
});