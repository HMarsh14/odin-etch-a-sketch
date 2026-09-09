const container = document.querySelector("#container");

const gridSize = 16;
const totalSquares = gridSize * gridSize;

const squareSize = 960 / gridSize;

for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-item");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
}

console.log(`Successfully created a ${gridSize}x${gridSize} grid!`);
