var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var gameState = "play";
var divisionHeight=300;
var divisions;
var particle;
var turn = 0;
var score = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for(var k = 0; k <=width; k = k +80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
    text("Score : "+score,20,30);
    
}
 


function draw() {
  background("black");
  textSize(20)
  text("100" , 420,600);
  text("200" , 500,600);
  text("200" , 340,600);
  text("300" , 580,600);
  text("300" , 260,600);
  text("400" , 660,600);
  text("400" , 180,600);
  text("500" , 740,600);
  text("500" , 100,600);
  text("600" , 20,600);
 
  text("Score : "+score,20,30);

  Engine.update(engine);



  if(particle!=null)
{
  particle.display();

if(particle.body.position.y>760)
{
  
  if(particle.body.position.x > 510 && particle.body.position.x < 570 )
  {
    score = score+500;
    turn++
    particle = null
    if(count>= 5) gameState = "end"
  }
}
}



if(turn === 5){
  gameState = "end";
}
else{ 
  gameState = "play";
}

if(gameState === "end"){
  text("GAMEOVER",400,400);
}
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    // score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  }

function mousePressed(){

if(gameState !== "end"){
count++;
particle = new Particle(mouseX, 10, 10, 10);
}

}
