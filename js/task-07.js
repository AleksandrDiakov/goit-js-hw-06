// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании 
// ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputControlEl = document.querySelector(`#font-size-control`);
const textSize = document.querySelector(`#text`);
    textSize.setAttribute(`style`, `font-size: ${inputControlEl.value}px`)

inputControlEl.addEventListener(`input`, (event) => {
    const fontSizeChange = event.currentTarget.value;
    textSize.style.fontSize = `${event.currentTarget.value}px`
})
