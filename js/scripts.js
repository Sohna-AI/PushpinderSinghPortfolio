/*!
 * Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener('DOMContentLoaded', function () {
  const textElement = document.getElementById('dynamic-div');
  const texts = ['Software Engineer', 'Diesel Technician'];
  let currentIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 50;
  const deletingSpeed = 50;
  const delayAfterTyping = 1000;
  const delayAfterDeleting = 300;

  function type() {
    const currentText = texts[currentIndex];
    const displayText = isDeleting
      ? currentText.substring(0, charIndex--)
      : currentText.substring(0, charIndex++);

    textElement.innerHTML = `${displayText}<span class="cursor"></span>`;

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => {
        isDeleting = true;
      }, delayAfterTyping);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % texts.length;
      setTimeout(type, delayAfterDeleting);
      return;
    }

    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
  }

  type();
});
