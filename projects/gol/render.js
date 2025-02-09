var canvas;
var ctx;
var cellSize = 8;
const gridWidth = Math.round((window.innerWidth * 0.8) / cellSize);
const gridHeight = Math.round((window.innerHeight * 0.8) / cellSize);

export const initialise = () => {
    canvas = document.getElementById("game");
    ctx = canvas.getContext("2d");
    canvas.width = gridWidth * cellSize;
    canvas.height = gridHeight * cellSize;
};

export const getGridSize = () => ({ gridWidth, gridHeight });

export const drawGrid = (grid) => {
    const width = grid.length;
    const height = grid[0].length;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let [r, g, b] = grid[x][y];
            ctx.fillStyle = `rgb(${r * 255}, ${g * 255}, ${b * 255})`;
            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
    }
};