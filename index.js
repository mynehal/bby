/* global typingEffect */

document.addEventListener("DOMContentLoaded", () => {
  typingEffect(Array.from(document.querySelectorAll("[data-typing-effect]")), {
    speed: 150,
    delay: 500,
    reset: false
  }).then(() => document.querySelector("footer").removeAttribute("hidden"));
});
