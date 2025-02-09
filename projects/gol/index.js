import * as gridUtils from './grid.js';
import * as render from './render.js';
import * as gol from './gol.js';

const pausePlayButton = document.getElementById("pausePlayButton");
const stepButton = document.getElementById("stepButton");

render.initialise();
const { gridWidth, gridHeight } = render.getGridSize();
let grid = gridUtils.createGrid(gridWidth, gridHeight);
let isPlaying = false;

const gameLoop = () => {
    grid = gol.calculateUpdatedGrid(grid);
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
    grid = gol.calculateUpdatedGrid(grid);
    render.drawGrid(grid);
};

pausePlayButton.addEventListener("click", pausePlay);
stepButton.addEventListener("click", step);

render.drawGrid(grid);