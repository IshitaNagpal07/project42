var spacecraft,spacecraft1,spacecraft2,spacecraft3,spacecraft4;
var iss,issImg;
var hasDocked = false;
var bg;

function preload(){
  issImg = loadImage("iss.png");
  bg =loadImage("spacebg.jpg");
  spacecraft1 = loadImage("spacecraft1.png");
  spacecraft2 = loadImage("spacecraft2.png");
  spacecraft3 = loadImage("spacecraft3.png");
  spacecraft4 = loadImage("spacecraft4.png");
  }

function setup() {
  createCanvas(1550,750);
  iss = createSprite(800,300);
  iss.addImage(issImg);

  spacecraft = createSprite(770,600);
  spacecraft.addImage(spacecraft1);
  spacecraft.scale=0.5;
}

function draw() {
  background(bg);
  if(!hasDocked){
    if(keyDown(LEFT_ARROW)){
    spacecraft.addImage(spacecraft3);
    spacecraft.x=spacecraft.x-2;
    }
  if(keyDown(RIGHT_ARROW)){
    spacecraft.addImage(spacecraft4);
    spacecraft.x=spacecraft.x+2;
    }
  if(keyDown(DOWN_ARROW)){
     spacecraft.addImage(spacecraft2);
    }
  if(keyDown(UP_ARROW)){
      spacecraft.addImage(spacecraft1);
      spacecraft.y=435;
      textSize(40);
      fill("white");
      text("Docking Successfull! ",700,700);
      hasDocked=true;
    }

    //if(spacecraft.y=435){
    //  textSize(15);
    //  fill("white");
     // text("Docking Successful! ",770,700);
   // }
    
  }
  
  drawSprites();
}