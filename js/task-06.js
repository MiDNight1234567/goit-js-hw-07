function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('.buttons-input');
const boxes = document.querySelector('.boxes');
const createBtn = document.querySelector('.create-btn');
const destroyBtn = document.querySelector('.destroy-btn');

createBtn.addEventListener('click', () => {
  destroyBoxes();
  const totalBoxes = input.value;
  createBoxes(totalBoxes);
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    const newBoxes = [];
    let width = 30;
    let height = 30;
    for (let i = 0; i < amount; i++) {
      const color = getRandomHexColor();
      const newBox = `<div style="width: ${width}px; height: ${height}px; background-color: ${color};"></div>`;
      newBoxes.push(newBox);
      width += 10;
      height += 10;
    }
    boxes.innerHTML = newBoxes.join('');
    input.value = '';
  }
}

function destroyBoxes() {
  return (boxes.innerHTML = '');
}
