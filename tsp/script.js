
let x;
let y;
let points = [];
const print = console.log
let populationSize = 200;
let mutationRate = 0.05;
let population = [];
let pointsInPath = 20;
class Point{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
}
function randomPoints(){
  let p = [];
  for(let i = 0; i < pointsInPath; i++){
    p.push(new Point(Math.random()*x,Math.random()*y))
  }
  return p
}
function scramble(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  return array
}


function distance(p1,p2){
  return Math.sqrt((p1.x-p2.x)**2 + (p1.y-p2.y)**2);
}
function setup() {
  createCanvas(1000, 1000);
  x = 1000;
  y = 1000;
  points = randomPoints();
  for(let i = 0; i < populationSize; i++){
    population.push(scramble([...points]));
  }
}

function draw() {
  background(100);
  let scores = []
  let nextGen = []
  for(let path of population){   
    let score = 0
    for(let i = 0; i < path.length-1; i++){
      score+=distance(path[i],path[i+1])
    }
    scores.push(score)
  }
  let indices = [...scores.keys()].sort((a, b) => scores[a] - scores[b]);
  for(let i = 0; i < populationSize/10; i++){
    nextGen.push(population[indices[i]]);
  }
  //crossing over/mutation
  for(let i = 0; i < populationSize * 9/10; i++){
    let p1 = nextGen[Math.floor(Math.random() * nextGen.length)];
    let p2 = nextGen[Math.floor(Math.random() * nextGen.length)];
    let beg = Math.floor(Math.random() * p1.length);
    let term = Math.floor(Math.random() * p1.length);
    let sbeg = Math.min(beg, term);
    let sterm = Math.max(beg, term);
    let sice = p1.slice(sbeg,sterm)
    let points = p2.filter(point => !sice.includes(point));
    let f1 = [
      ...points.slice(0,sbeg),
      ...sice,
      ...points.slice(sbeg)
    ]
    if(Math.random() < mutationRate){
        let id1 = Math.floor(Math.random() * points.length);
        let id2 = Math.floor(Math.random() * points.length);
        [points[id1], points[id2]] = [points[id2], points[id1]];
    }
    
    
    
    
    nextGen.push(f1)
    }
    population=nextGen;
  drawPath(population[0])
}
function drawPath(path){
  for(let i = 0; i < path.length-1; i++){
    let p = path[i];
    line(p.x,p.y,path[i+1].x,path[i+1].y)
    circle(p.x,p.y,10)

  }
  circle(path[path.length-1].x,path[path.length-1].y,10)
}