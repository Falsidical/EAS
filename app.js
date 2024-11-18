const grid = document.querySelector('.grid-container');
const slider = document.querySelector('#slider');
const sliderLabel = document.querySelector('#sliderLabel');
const rainbowToggle = document.querySelector('#rainbow');
const colorSelector = document.querySelector('#color');
const clearGridBtn = document.querySelector('#clearGrid');

let rainbowMode = rainbowToggle.checked;
let activeColor = colorSelector.value;
let gridSize = slider.value;

rainbowToggle.addEventListener('change', (e) => {
  rainbowMode = !rainbowMode;
});

colorSelector.addEventListener('change', (e) => {
  activeColor = e.target.value;
});

slider.addEventListener('input', (e) => {
  sliderLabel.innerText = `Size ${e.target.value}x${e.target.value}`;
  gridSize = e.target.value;
  drawGrid(gridSize);
});

clearGridBtn.addEventListener('click', () => {
  drawGrid(gridSize);
});
function drawCell() {
  const cell = document.createElement('div');
  cell.addEventListener('mouseover', () => {
    if (rainbowMode) {
      cell.style.backgroundColor = randomColor();
    } else {
      cell.style.backgroundColor = activeColor;
    }
  });
  return cell;
}

function drawGrid(size) {
  if (size < 1) return;
  grid.replaceChildren();
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let i = 0; i < size; i++) {
      const cell = drawCell();
      row.appendChild(cell);
    }
    grid.appendChild(row);
  }
}

function randomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

drawGrid(gridSize);
