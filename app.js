const grid = document.querySelector('.grid-container');

function drawCell() {
  const cell = document.createElement('div');
  return cell;
}

function drawGrid(size) {
  if (size < 1) return;
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

drawGrid(16);
