import * as gridUtils from './grid.js';
import * as render from './render.js';
import * as gol from './gol.js';

const pausePlayButton = document.getElementById("pausePlayButton");
const stepButton = document.getElementById("stepButton");

const GRID_WIDTH = 240;
const GRID_HEIGHT = 160;
const CELL_SIZE = 5;
let grid = gridUtils.createGrid(GRID_WIDTH, GRID_HEIGHT);
let isPlaying = false;

const gameLoop = () => {
    grid = gol.updateGrid(grid);
    render.drawGrid(grid);

    if (isPlaying) {
        requestAnimationFrame(gameLoop);
    }
}

const pausePlay = () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
        gameLoop();
    }
};

const step = () => {
    isPlaying = false;
    grid = gol.updateGrid(grid);
    render.drawGrid(grid);
};

pausePlayButton.addEventListener("click", pausePlay);
stepButton.addEventListener("click", step);

render.initialise(GRID_WIDTH, GRID_HEIGHT, CELL_SIZE);
render.drawGrid(grid);