import * as gridUtils from './grid.js';
import * as render from './render.js';
import * as gol from './gol.js';

const pausePlayButton = document.getElementById("pausePlayButton");
const stepButton = document.getElementById("stepButton");
const clearButton = document.getElementById("clearButton");
const randomButton = document.getElementById("randomButton");
const whiteButton = document.getElementById("whiteButton");
const blackButton = document.getElementById("blackButton");
const redButton = document.getElementById("redButton");
const greenButton = document.getElementById("greenButton");
const blueButton = document.getElementById("blueButton");
const yellowButton = document.getElementById("yellowButton");
const magentaButton = document.getElementById("magentaButton");
const cyanButton = document.getElementById("cyanButton");

var grid;
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

pausePlayButton.addEventListener("click", pausePlay);
stepButton.addEventListener("click", step);
clearButton.addEventListener("click", clearGrid);
randomButton.addEventListener("click", randomizeGrid);
whiteButton.addEventListener("click", () => currentPaintType = [1, 1, 1]);
blackButton.addEventListener("click", () => currentPaintType = [0, 0, 0]);
redButton.addEventListener("click", () => currentPaintType = [1, 0, 0]);
greenButton.addEventListener("click", () => currentPaintType = [0, 1, 0]);
blueButton.addEventListener("click", () => currentPaintType = [0, 0, 1]);
yellowButton.addEventListener("click", () => currentPaintType = [1, 1, 0]);
magentaButton.addEventListener("click", () => currentPaintType = [1, 0, 1]);
cyanButton.addEventListener("click", () => currentPaintType = [0, 1, 1]);