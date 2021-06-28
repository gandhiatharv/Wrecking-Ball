const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var ball, rope, ground, bg;
var restart, shot;
var gameState = "onSling";

function preload(){
    bg = loadImage("w.jpg");
    restart = loadSound("restart.mp3");
    shot = loadSound("shot.mp4");
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 790, 1200, 20);

    box1 = new Box(900,100,70,70);
    box2 = new Box(900,100,70,70);
    box3 = new Box(900,100,70,70);
    box4 = new Box(900,100,70,70);
    box5 = new Box(900,100,70,70);
    box6 = new Box(900,100,70,70);
    box7 = new Box(800,100,70,70);
    box8 = new Box(800,100,70,70);
    box9 = new Box(800,100,70,70);
    box10 = new Box(800,100,70,70);
    box11 = new Box(800,100,70,70);
    box12 = new Box(800,100,70,70);
    box13 = new Box(700,100,70,70);
    box14 = new Box(700,100,70,70);
    box15 = new Box(700,100,70,70);
    box16 = new Box(700,100,70,70);
    box17 = new Box(700,100,70,70);
    box18 = new Box(700,100,70,70);
    box19 = new Box(700,100,70,70);
    box20 = new Box(700,100,70,70);

    ball = new Bob(200, 500);
    rope = new Rope(ball.body, {x:200, y:200});

    stroke("lightblue");         
}

function draw(){
    background(bg);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    ball.display();
    rope.display();
    ground.display();

    if (gameState === "launched") {
        fill("black");
        stroke("lightblue");         
        textSize(24); 
        text("Press space to try again.", 480, 50);
    } else {
        fill("black");
        stroke("lightblue");         
        textSize(24); 
        text("Pull the wrecking ball backward and then let go to launch it.", 300, 50);
    }
}

function mouseDragged(){
    if(mouseX >=0 &&mouseX<200&&gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }

}

function mouseReleased(){
    rope.fly();
    gameState="launched";
    shot.play();
}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(ball.body, {x:200, y:200});
     rope.attach(ball.body);
gameState = "onSling";
restart.play();
    }
}
  