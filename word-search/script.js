const print = console.log
let populationSize = 200;
let mutationRate = 0.05;
let population = [];
let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", " ", "''", "A","B","C","D","E","F","G","H","I","J","K","L",'M','N','O','P','Q',"R",'S','T','U','V','W','X','Y',"Z", "!", "?"]
let targetPhrase = "To be or not to be that is the question"
function setup() {
  createCanvas(400, 400);
  for(let i = 0; i < populationSize; i++){
    let string = "";
    for(j = 0; j < targetPhrase.length; j++){
      string+=alphabet[int(Math.random()*alphabet.length)];
    }
    population[i] = string;
  }
}

function draw() {
  background(220);
  let scores = []
  let nextGen = []
  for(let p of population){
    let score = 0;
    for(let i = 0; i < targetPhrase.length; i++){
      if(p.substring(i,i+1) == targetPhrase.substring(i,i+1)){
        score+=1;
      }
    }
    scores.push(score);
  }
  let indices = [...scores.keys()].sort((a, b) => scores[b] - scores[a]);
  for(let i = 0; i < 20; i++){
    nextGen.push(population[indices[i]]);
  }
  for(let i = 0; i < 180; i++){
    let rand1 = int(Math.random()*20);
    let rand2 = int(Math.random()*20);
    while(rand1 == rand2){
      rand2 = int(Math.random()*20)
    }
    let m1 = nextGen[rand1];
    let m2 = nextGen[rand2];
    let child = "";
    for(let j = 0; j < targetPhrase.length; j++){
      let flip = int(Math.random()*2);
      if(Math.random() < mutationRate){
        child+=alphabet[int(Math.random()*alphabet.length)];
      }
      else if(flip == 0){
        child+=m1.substring(j,j+1);
      } else{
        child+=m2.substring(j,j+1)
      }
      
    }
    nextGen.push(child)
  }
  population=nextGen;
  text(population[0],50,50)
}
