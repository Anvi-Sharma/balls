const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground= new Ground(600,750,1200,25);
    box1= new Box(800,600,50,50);
    box2= new Box(850,600,50,50);
    box3= new Box(900,600,50,50);
    box4= new Box(800,500,50,50);
    box5= new Box(850,500,50,50);
    box6= new Box(900,500,50,50);
    
}

function draw(){
    background("black");
    Engine.update(engine);

    ground.display();

    stroke("white")
    fill("blue")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    

}