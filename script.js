'use strict';

const textarea = document.querySelector('textarea');

textarea.addEventListener('input', function () {
  const text = this.value.trim().replaceAll('?', '.').replaceAll('!', '.');

  //   Counting senteces
  document.querySelector('.sentences').textContent = text
    .split('. ')
    .filter(s => s !== '').length;

  // // Counting words
  document.querySelector('.words').textContent = text
    .replace(/\s+/g, ' ')
    .split(' ')
    .filter(s => s !== '').length;

  // Counting characters

  document.querySelector('.characters').textContent = text.length;
});
