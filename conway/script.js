let grid;
let cols;
let rows;
let paused = false;
let resolution = 15; // Size of each cell

function setup() {
  createCanvas(windowWidth, windowHeight - 50);
  cols = floor(width / resolution);
  rows = floor(height / resolution);

  grid = make2DArray(cols, rows);
  randomizeGrid();
}

function draw() {
  background(240); // Light gray background

  // 1. Draw the grid
  // 2. Compute next state (if not paused)

    // Underpopulation: Any live cell with fewer than 2 live neighbors dies.
    // Survival: Any live cell with 2 or 3 live neighbors lives on to the next generation.
    // Overpopulation: Any live cell with more than 3 live neighbors dies.
    // Reproduction: Any dead cell with exactly 3 live neighbors becomes a live cell.
    // 
  let buffer = grid.map(e => [...e])
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[0].length; j++){
      let count = countNeighbors(grid,i,j);
      if(!paused){
        buffer[i][j] = count == 3 || (grid[i][j] && count == 2)
      }
      
      fill(255,255,255)
      if(buffer[i][j]){
          fill(0,50*count,0)
      }
      rect(i*resolution,j*resolution,resolution,resolution)
    }
  }
  grid = buffer; 


}

// --- INTERACTIVE CONTROLS ---

// 1. Click or Drag to Draw
function mousePressed() {
  toggleCell(mouseX,mouseY,false);
}

function mouseDragged() {
  toggleCell(mouseX,mouseY,true);
}

function toggleCell(x,y,dragged) {
  let i = Math.floor(y/resolution);
  let j = Math.floor(x/resolution) 
  grid[j][i] = !grid[j][i] || dragged
}

// 2. Keyboard Controls
function keyPressed() {
  if(key === ' '){
    paused = !paused;
  }
  if(key === 'c'){
    grid = make2DArray(cols,rows);
  }
  if(key === 'r'){
    randomizeGrid();
  }
}

// --- HELPER FUNCTIONS ---

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows).fill(0);
  }
  return arr;
}

function randomizeGrid() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2));
    }
  }
}
const inRange = (k, l) =>  k >= 0 && k < cols && l >= 0 && l < rows

function countNeighbors(grid, x, y) {
    let liveNeighbors = 0
    for (let k = x-1; k <= x+1; k++)
        for (let l = y-1; l <= y+1; l++)
            liveNeighbors += (k != x || l != y) && inRange(k, l) && grid[k][l];
    return liveNeighbors;
}