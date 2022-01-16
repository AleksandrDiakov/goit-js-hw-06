// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике 
// на button.change - color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерации случайного цвета используй функцию getRandomHexColor.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body')
const colorEl = document.querySelector('.color');
const changeColorEl = document.querySelector('.change-color')

changeColorEl.addEventListener('click', onButtonClick);

function onButtonClick() {
  bodyEl.setAttribute('style', `background-color: ${getRandomHexColor()};`);
  colorEl.textContent = bodyEl.style.backgroundColor;
}