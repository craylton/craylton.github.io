import * as gridUtils from './grid.js';

const beta = 0.25;
const survivalLowLimit = 2.5;
const survivalHighLimit = 5;
const birthLowLimit = 4;
const birthHighLimit = 5;

const countNeighbors = (grid, x, y) => {
    const width = grid.length;
    const height = grid[0].length;

    let R = 0, G = 0, B = 0;
    const directions = [-1, 0, 1];

    for (let dx of directions) {
        for (let dy of directions) {
            if (dx === 0 && dy === 0) continue;
            let nx = x + dx, ny = y + dy;
            if (nx >= 0 && ny >= 0 && nx < width && ny < height) {
                R += grid[nx][ny][0];
                G += grid[nx][ny][1];
                B += grid[nx][ny][2];
            }
        }
    }
    return { R, G, B };
};

export const calculateUpdatedGrid = (grid) => {
    const width = grid.length;
    const height = grid[0].length;
    let newGrid = gridUtils.createEmptyGrid(width, height);

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
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
    return newGrid;
};