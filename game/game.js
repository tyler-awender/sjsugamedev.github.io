var ballx = 300;
var bally = 300;
var ballSize = 70;
var score = 0;
var gameState = "L1";
var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;


function preload() {
// preload() runs once, it may make you wait
// img = loadImage('jonesy.png'); // cat.jpg needs to be next to this .js file
// img2 = loadImage('hordezombie.png');
// img3 = loadImage('bosscubic.jpg');
// img4 = loadImage('bosscaretaker.png');
// img5 = loadImage('rushhorde.jpg');
// img6 = loadImage('zombies.jpg');
// img7 = loadImage('horderush.jpg');
// img8 = loadImage('cubeassassin.jpg');
// img9 = loadImage('caretaker.jpg');
// img10 = loadImage('fortnitemares.jpg');
// you can link to an image on your github account
 img = loadImage('https://josephinecastro.github.io/horderush/jonesy.png');
 img2 = loadImage('https://josephinecastro.github.io/horderush/hordezombie.png');
 img3 = loadImage('https://josephinecastro.github.io/horderush/bosscubic.jpg');
 img4 = loadImage('https://josephinecastro.github.io/horderush/bosscaretaker.png');
 img5 = loadImage('https://josephinecastro.github.io/horderush/rushhorde.jpg');
 img6 = loadImage('https://josephinecastro.github.io/horderush/zombies.jpg');
 img7 = loadImage('https://josephinecastro.github.io/horderush/horderush.jpg');
 img8 = loadImage('https://josephinecastro.github.io/horderush/cubeassassin.jpg');
 img9 = loadImage('https://josephinecastro.github.io/horderush/caretaker.jpg');
 img10 = loadImage('https://josephinecastro.github.io/horderush/fortnitemares.jpg');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(40);
} // end of setup


function draw() {
  background(img10);
  if(gameState == "L1"){ 
    levelOne();
}
  if(gameState == "L2"){
    levelTwo();
}
  if(gameState == "L3"){
    levelThree();
}
  if(gameState == "L4"){
    levelFour();
}
      text(("Score: " + score),width/2,40);
} //end of draw


function levelOne(){
  background(img6);
  text("Level 1", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    
}
   
  if(score>= 6){
     gameState = "L2";
  }
  
  // ellipse(ballx, bally, ballSize, ballSize);
  image(img2, ballx, bally, ballSize, ballSize); 
  line(ballx+ballSize/2, bally+ballSize/2, mouseX, mouseY);
  
  
} // end level one

function levelTwo(){
  background(img8);
  text("Level 2!", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    
}
  
  if(score>= 12){
    gameState = "L3";
  }
  
  // ellipse(ballx, bally, ballSize, ballSize);
  image(img3, ballx, bally, ballSize, ballSize); 
  line(ballx+ballSize/2, bally+ballSize/2, mouseX, mouseY);
  
  
} // end level two

function levelThree(){
  background(img9);
  text("Level 3", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    ballSize = ballSize - 3 ;
    
}
   
  if(score>= 18){
  }
  
  // ellipse(ballx, bally, ballSize, ballSize);
  image(img4, ballx, bally, ballSize, ballSize); 
  line(ballx+ballSize/2, bally+ballSize/2, mouseX, mouseY);

  
} // end level three

function levelFour(){
  background(img5);
  text("Level 4!", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    ballSize = ballSize - 3 ;
    
}
   
  if(score>= 24){
  }
  
  // ellipse(ballx, bally, ballSize, ballSize);
  image(img7, ballx, bally, ballSize, ballSize); 
  line(ballx+ballSize/2, bally+ballSize/2, mouseX, mouseY);
  
  
} // end level four
