
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground1
var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300;
var particle;
var gameState="start";
var score=0;
var count=0;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  

	//Create the Bodies Here.
   ground1=new ground(600,780,800,20);
   for(var k=0;k<=width;k=k + 80){
     divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
   }
   for (var j=40; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
   }
   for (var j=15; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
}
for (var j=40; j <=width; j=j+50) {
  plinkos.push(new Plinko(j,275));
}
for (var j=15; j <=width-10; j=j+50) {
plinkos.push(new Plinko(j,375));
}
}

function draw() {
  background(0);  
  Engine.run(engine);
  ground1.display();
  text ("500",5,500);
  text ("500",80,500);
  text ("500",160,500);
  text ("500",240,500);
  text ("100",320,500);
  text ("100",400,500);
  text ("100",480,500);
  text ("200",560,500);
  text ("200",640,500);
  text ("200",720,500);
  if(gameState=="end"){
    textSize(50);
    text("Game Over",150,250);
  }
  if(frameCount%60==0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
for (var j=0; j <particles.length; j++) {
  particles[j].display()
}
for (var k=0; k <divisions.length; j++) {
  divisions[k].display()
}
for (var p=0; j <plinkos.length; j++) {
  plinkos[p].display()
}
if (particle!=null){
  particle.display()
if  (particles.body.position.y>760){
  if (particles.body.position.x<300){
   score=score+500;
   particles=null;
   if(count>=5) gameState="end";
  }else if(particle.body.position.x<600&&particle.body.position.x>301){
    score=score+100;
    particles=null;
    if(count>=5) gameState="end";
  }else if(particle.body.position.x<900&&particle.body.position.x>601){
    score=score+200;
    particles=null;
    if(count>=5) gameState="end";
  }
}
}
}
function mousePressed (){
  if (gameState!=="end"){
    count++;
    particle=new Particle(mouseX,10,10,10);
  }
}
