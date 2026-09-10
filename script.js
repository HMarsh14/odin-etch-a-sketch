// Grab the container element from the html
const container = document.querySelector("#container");

// Define the grid size
const gridSize = 16;
const totalSquares = gridSize * gridSize;

// Calculate the exact size each sqaure should be
const squareSize = 960 / gridSize;

// Helper function: Generates a completely random RGB color string
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// Loop to create and append the grid squares
for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");

    // Add the class for styling
    square.classList.add("grid-item");

    // Set square height and width
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Hover event listener to change squares to a random color
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = getRandomColor();
    });

    // Append the square into the grid container
    container.appendChild(square);
}

console.log(`Successfully created a ${gridSize}x${gridSize} grid!`);
