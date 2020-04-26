var img = [];
var lineOne;
var lineTwo;
var lineThree;

function preload() {
  for (var i=0; i<37; i++) {
    img[i] = loadImage("img"+i+".png");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noCursor();
  frameRate(8);
}

function draw() {
  lineOne = windowHeight/4;
  lineTwo = lineOne*2;
  lineThree = lineOne*3;

  if(mouseY < lineOne){
    let number = random([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    image(img[number], mouseX, 0, img[number].width*lineOne/img[number].height, lineOne);
  }
  if((mouseY > lineOne) && (mouseY < lineTwo)){
    let number = random([10, 11, 12, 13, 14, 15, 16, 17]);
    image(img[number], mouseX, lineOne, img[number].width*lineOne/img[number].height, lineOne);
  }
  if((mouseY > lineTwo) && (mouseY < lineThree)){
    let number = random([18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]);
    image(img[number], mouseX, lineTwo, img[number].width*lineOne/img[number].height, lineOne);
  }
  if(mouseY > lineThree){
    let number = random([30, 31, 32, 33, 34, 35, 36]);
    image(img[number], mouseX, lineThree, img[number].width*lineOne/img[number].height, lineOne);
  }



}

function mousePressed() {

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
