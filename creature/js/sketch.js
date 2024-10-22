let xArray = []; // initialize empty array
let yArray = [];
let initialSizeOfArray = 100;

function setup() {
  // createCanvas(800, 500);
  let cnv = createCanvas(800, 500);
  cnv.parent("p5-canvas-container");
  
  for(let i = 0; i < initialSizeOfArray; i++){
    xArray[i] = random(0, width);
    yArray[i] = random(0, height);
  }
  
}

function draw() {
  background(220, 20, 120);
  
  for(let i = 0; i < xArray.length; i++){
    xArray[i]+=random(-1,1);
    yArray[i]+=random(-1,1);
    
    let x = xArray[i];
    let y = yArray[i];
    circle(x, y, 20);
  }
  
  // xArray[0]++
  
}