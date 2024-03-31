let img;

function preload() {
  img = loadImage('assets/wilf.JPG');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  image(img, 250, 250);
}
