const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bg, snowball;
var snowImg;

function preload() {
  bg = loadImage("snow2.jpg");
  snowImg = loadImage("snow5.webp");
}


function setup() {
  createCanvas(800,400);

}

function draw() {
  background(bg);  
  snowdrop();
  drawSprites();
}

function snowdrop() {
  if (frameCount %5 === 0) {
    snowball = createSprite (50,10,50,50);
    snowball.x = Math.round(random(1,800))
    snowball.addImage(snowImg)
    snowball.scale = 0.01;
    snowball.velocity = 2;

  }
}
