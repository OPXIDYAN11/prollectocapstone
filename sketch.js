const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var piso;
var ana;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,1080);
    engine = Engine.create();
    world = engine.world;
piso = new Piso(600,height - 50,1200,200);
ana = new Ana (700,200);
    
}

function draw(){
    background("#02174B");
    Engine.update(engine);
piso.display();
ana.display();
}

function mouseDragged(){
   
}


function mouseReleased(){
    
}

function keyPressed(){
   
}

