// Grab the container element from the html
const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resize-btn");

// Helper function: Generates a completely random RGB color string
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// Reusable function to build the grid dynamically based on 'size' input
function createGrid(gridSize) {
    // Clear existing grid squares
    container.innerHTML = "";

    // Calculate the total squares and the size for each square
    const totalSquares = gridSize * gridSize;
    const squareSize = 960 / gridSize;

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
}

// Event listener for the resize button
resizeBtn.addEventListener("click", () => {
    // Prompt the user for input and convert it to an integer number
    let userInput = prompt(
        "Enter the number of squares per side (Maximum 100): ",
    );
    let size = parseInt(userInput);

    // Validate the input (Check if it's a valid number between 1 and 100)
    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
    } else {
        // Re-generate the grid with the new size
        createGrid(size);
    }
});

// Initialiise the default 16x16 grid when the page first loads
createGrid(16);
