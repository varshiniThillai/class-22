const  Engine= Matter.Engine;
const  World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,ground,ball;

function setup(){
createCanvas(600,600);
engine=Engine.create();
world=engine.world;


var options = {

 isStatic : true,

}

var ball_options ={
  restitution : 0.5,
}

ground= Bodies.rectangle(200,400,400,30,options);
ball=Bodies.circle(200,100,20,ball_options);
World.add(world,ground);
World.add(world,ball);


}

function draw(){
background(0);
Engine.update(engine)
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,30);
circle(ball.position.x,ball.position.y,20);

}


