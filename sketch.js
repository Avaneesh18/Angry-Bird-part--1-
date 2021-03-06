const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var log2,box3;
var box4;

var box5;

var log3,log4;

var log1;
var pig1,pig2; 

var bird;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;

    pig2= new Pig(810,220)
    pig1= new Pig(810,350)

    box5= new Box(810,160,70,70)

    box3= new Box(700,240,70,70)
    box4= new Box(920,240,70,70)

    bird= new Bird(800,200)

    log1= new Log(810,260,300,PI/2)
    log2= new Log(810,180,300,PI/2)

    log3= new Log(760,120,150,PI/7)
    log4= new Log(870,120,150,-PI/7)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    
    ground.display();
    
    pig1.display();
    log1.display();

    pig2.display();
    log2.display();
    
    box3.display();
    box4.display();

    log4.display();
    log3.display();

    bird.display();
    box5.display();
}