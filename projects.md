---
layout: default
---

## Projects


[RGB Game of Life](projects/gol/index.html)

RGB Life is a cellular automaton that extends Conway’s Game of Life ([wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)) by giving each cell three binary values: **Red (R), Green (G), and Blue (B)**. A cell’s color is determined by which values are set:

- **Black (000) or White (111)**
- **Cyan (011)**, **Magenta (101)**, **Yellow (110)**
- **Red (100)**, **Green (010)**, **Blue (001)**

### Rules
A cell is **alive** if it has at least two active colors. The evolution follows these steps:

1. For each color, compute its **score**:
   **_S<sub>C</sub> = N<sub>C</sub> + 0.25(N<sub>C<sub>1</sub></sub> + N<sub>C<sub>2</sub></sub>)_**
   where:
   - **_S<sub>C</sub>_** is the score for color **_C_**.
   - **_N<sub>C</sub>_** is the number of neighbors with color **_C_**.
   - **_N<sub>C<sub>1</sub></sub>_**, **_N<sub>C<sub>2</sub></sub>_** are the numbers of neighbors with the other two colors.

2. A color is set in a **dead** cell if its score is in **[4,5]**.
3. A color remains in a **live** cell if its score is in **[2.5,5]**.

Importantly, when restricted to black (000) and white (111), **the rules reduce to Conway’s original Life**, making RGB Life a natural extension for those familiar with it.


[Memory Game](projects/MemoryGame/index.html)

This is a very simple game which was written predominantly by ChatGPT and a Copilot agent.

The game, often called _Concentration_, is a memory challenge that requires the user to memorise the locations of face-down pairs of cards, and match them up. This is often used as a 'learn-to-code' exercise, and in this case I treated it as more of a 'learn-to-code-with-AI' exercise. I might come back to this every now and then to add features whenever I want to try out another type of agent or a new model.