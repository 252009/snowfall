const Engine = Matter.Engine;
var engine,world
const World= Matter.World;
const Bodies = Matter.Bodies;
var bimg
var Snow=[]
function preload()
{
  bimg=loadImage("snow3.jpg")
}
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  for(i=0;i=300;i=i+1)
  {
  Snow.push(new snow(random(0,800),-10))
  }
}

function draw() {
  background(bimg);  
  Engine.update(engine)
  drawSprites();
  for(i=0;i=300;i=i+1)
  {
  Snow[i].display()
  }
}