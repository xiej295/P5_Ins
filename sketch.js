var img = [];
var lineOne;
var lineTwo;
var lineThree;

function preload() {
  for (var i=0; i<5; i++) {
    img[i] = loadImage("img"+i+".png"); 
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noCursor();  
  frameRate(5);
}

function draw() {
  lineOne = windowHeight/4;
  lineTwo = lineOne*2;
  lineThree = lineOne*3;
  
  if(mouseY < lineOne){
    let number = random([0, 1, 2, 3, 4]);
    image(img[number], mouseX, 0, img[number].width*lineOne/img[number].height, lineOne);
  }
  if((mouseY > lineOne) && (mouseY < lineTwo)){
    let number = random([1, 2, 3, 4, 0]);
    image(img[number], mouseX, lineOne, img[number].width*lineOne/img[number].height, lineOne);
  }
  if((mouseY > lineTwo) && (mouseY < lineThree)){
    let number = random([1, 2, 3, 4, 0]);
    image(img[number], mouseX, lineTwo, img[number].width*lineOne/img[number].height, lineOne);
  }
  if(mouseY > lineThree){
    let number = random([1, 2, 3, 4, 0]);
    image(img[number], mouseX, lineThree, img[number].width*lineOne/img[number].height, lineOne);
  }

  
    
}

function mousePressed() {

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}