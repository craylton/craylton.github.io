import * as gridUtils from './grid.js';
import * as render from './render.js';
import * as gol from './gol.js';

document.getElementById("whiteButton").addEventListener("click", () => currentPaintType = [1, 1, 1]);
document.getElementById("blackButton").addEventListener("click", () => currentPaintType = [0, 0, 0]);
document.getElementById("redButton").addEventListener("click", () => currentPaintType = [1, 0, 0]);
document.getElementById("greenButton").addEventListener("click", () => currentPaintType = [0, 1, 0]);
document.getElementById("blueButton").addEventListener("click", () => currentPaintType = [0, 0, 1]);
document.getElementById("yellowButton").addEventListener("click", () => currentPaintType = [1, 1, 0]);
document.getElementById("magentaButton").addEventListener("click", () => currentPaintType = [1, 0, 1]);
document.getElementById("cyanButton").addEventListener("click", () => currentPaintType = [0, 1, 1]);

let grid;
let isPlaying = false;
let currentPaintType = [1, 1, 1];

const clickCell = (x, y) => {
    if (x >= 0 && x < gridWidth && y >= 0 && y < gridHeight) {
        grid[x][y] = currentPaintType;
    }
    if (!isPlaying) {
        render.drawGrid(grid);
    }
};

const gameLoop = () => {
    grid = gol.calculateUpdatedGrid(grid);
    render.drawGrid(grid);

    if (isPlaying) {
        requestAnimationFrame(gameLoop);
    }
};

const pausePlay = () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
        gameLoop();
    }
};

const step = () => {
    isPlaying = false;
    grid = gol.calculateUpdatedGrid(grid);
    render.drawGrid(grid);
};

const clearGrid = () => {
    isPlaying = false;
    grid = gridUtils.createEmptyGrid(gridWidth, gridHeight);
    render.drawGrid(grid);
}

const randomizeGrid = () => {
    isPlaying = false;
    grid = gridUtils.createRandomGrid(gridWidth, gridHeight);
    render.drawGrid(grid);
}

render.initialize(clickCell);
const { gridWidth, gridHeight } = render.getGridSize();
clearGrid();

document.getElementById("pausePlayButton").addEventListener("click", pausePlay);
document.getElementById("stepButton").addEventListener("click", step);
document.getElementById("clearButton").addEventListener("click", clearGrid);
document.getElementById("randomButton").addEventListener("click", randomizeGrid);