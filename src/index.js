import cipher from './cipher.js';

const inputText = document.getElementById('inputText');
const offsetInput = document.getElementById('offset');
const result = document.getElementById('result');

document.getElementById('encodeBtn').addEventListener('click', () => {
  const offset = parseInt(offsetInput.value);
  const text = inputText.value.toUpperCase(); // solo mayúsculas por ahora
  result.textContent = cipher.encode(offset, text);
});

document.getElementById('decodeBtn').addEventListener('click', () => {
  const offset = parseInt(offsetInput.value);
  const text = inputText.value.toUpperCase();
  result.textContent = cipher.decode(offset, text);
});
