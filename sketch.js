var bg;
var web;

//const Bodies = Matter.Bodies;

function preload(){
bg = loadImage("snow3.jpg");

}
function setup() {
  createCanvas(800,400);
 //createSprite(400, 200, 50, 50);

web = new Snow(400, 20, 50, 50 );


}

function draw() {
  web.display();

  background(bg);  

 
  drawSprites();

}