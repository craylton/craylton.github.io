import * as gridUtils from './grid.js';
import * as render from './render.js';
import * as gol from './gol.js';

const pausePlayButton = document.getElementById("pausePlayButton");
const stepButton = document.getElementById("stepButton");

var grid;
let isPlaying = false;

const clickCell = (x, y) => {
    if (x >= 0 && x < gridWidth && y >= 0 && y < gridHeight) {
        grid[x][y] = [1, 1, 1];
    }
    if (!isPlaying) {
        render.drawGrid(grid);
    }
};

render.initialise(clickCell);
const { gridWidth, gridHeight } = render.getGridSize();
grid = gridUtils.createGrid(gridWidth, gridHeight);

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

pausePlayButton.addEventListener("click", pausePlay);
stepButton.addEventListener("click", step);

render.drawGrid(grid);