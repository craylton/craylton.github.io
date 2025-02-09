import * as gridM from './grid.js';

const pausePlayButton = document.getElementById("pausePlayButton");
const stepButton = document.getElementById("stepButton");
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const GRID_WIDTH = 240;
const GRID_HEIGHT = 160;
const CELL_SIZE = 5;
let grid = gridM.createGrid(GRID_WIDTH, GRID_HEIGHT);
let isPlaying = false;
const beta = 0.25;
const survivalLowLimit = 2.5;
const survivalHighLimit = 5;
const birthLowLimit = 4;
const birthHighLimit = 5;

const countNeighbors = (grid, x, y) => {
    let R = 0, G = 0, B = 0;
    const directions = [-1, 0, 1];

    for (let dx of directions) {
        for (let dy of directions) {
            if (dx === 0 && dy === 0) continue;
            let nx = x + dx, ny = y + dy;
            if (nx >= 0 && ny >= 0 && nx < GRID_WIDTH && ny < GRID_HEIGHT) {
                R += grid[nx][ny][0];
                G += grid[nx][ny][1];
                B += grid[nx][ny][2];
            }
        }
    }
    return { R, G, B };
}

const updateGrid = () => {
    let newGrid = gridM.createZeroGrid(GRID_WIDTH, GRID_HEIGHT);

    for (let x = 0; x < GRID_WIDTH; x++) {
        for (let y = 0; y < GRID_HEIGHT; y++) {
            let { R, G, B } = countNeighbors(grid, x, y);
            let R_score = R + beta * G + beta * B;
            let G_score = G + beta * R + beta * B;
            let B_score = B + beta * R + beta * G;

            if (grid[x][y][0] + grid[x][y][1] + grid[x][y][2] < 2) {
                newGrid[x][y][0] = (birthLowLimit <= R_score && R_score <= birthHighLimit) ? 1 : 0;
                newGrid[x][y][1] = (birthLowLimit <= G_score && G_score <= birthHighLimit) ? 1 : 0;
                newGrid[x][y][2] = (birthLowLimit <= B_score && B_score <= birthHighLimit) ? 1 : 0;
            }
            else {
                newGrid[x][y][0] = (survivalLowLimit <= R_score && R_score <= survivalHighLimit) ? 1 : 0;
                newGrid[x][y][1] = (survivalLowLimit <= G_score && G_score <= survivalHighLimit) ? 1 : 0;
                newGrid[x][y][2] = (survivalLowLimit <= B_score && B_score <= survivalHighLimit) ? 1 : 0;
            }
        }
    }
    grid = newGrid;
}

const drawGrid = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let x = 0; x < GRID_WIDTH; x++) {
        for (let y = 0; y < GRID_HEIGHT; y++) {
            let [r, g, b] = grid[x][y];
            ctx.fillStyle = `rgb(${r * 255}, ${g * 255}, ${b * 255})`;
            ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        }
    }
}

const gameLoop = () => {
    updateGrid();
    drawGrid();

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
    updateGrid();
    drawGrid();
};

pausePlayButton.addEventListener("click", pausePlay);
stepButton.addEventListener("click", step);

canvas.width = GRID_WIDTH * CELL_SIZE;
canvas.height = GRID_HEIGHT * CELL_SIZE;
drawGrid();
