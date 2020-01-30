let myCapture;

let flower;

function preload() {}
  flower = loadImage('kittens/flower.jpeg');

function setup() {
  createCanvas(320, 240);
  canvas.parent("sketch");
  myCapture = createCapture(VIDEO);
  //myCapture.hide();
  fill(255, 0, 0);
  noStroke();
}

function draw() {
  background(255);
  //fill(random(255), random(255), random(255));
  
  //load pixel data into myCapture object
  myCapture.loadPixels();
 
  
  const stepSize = round(constrain(mouseX / 8, 6, 32));
  
  for(let y = 0; y < height; y+=stepSize) {
    for(let x = 0; x < width; x+=stepSize) {
      const i = y * width + x;
      //const darkness = (255 - myCapture.pixels[i * 4]) / 255;
      //const radius = stepSize * darkness;
      
      push();
        scale(-1, 1);
        translate(width, 0);
        image(flower, x, y);
        //rect(x, y, radius, radius);
      pop();
      
      //fill(random(255), random(255), random(255));
      image(flower, x, y);
      //rect(x, y, radius, random(1,30));
    }
  }
}