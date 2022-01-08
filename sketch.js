var Tom,TomImg,TomImg2,TomImg3;
var Jerry,JerryImg,JerryImg2,JerryImg3;
var forest,forestImg;

function preload() {
    forestImg = loadImage("images/garden.png");
    TomImg1 = loadAnimation("images/cat1.png");
    JerryImg1 = loadAnimation("images/mouse1.png");
    TomImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    JerryImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    TomImg3 = loadAnimation("images/cat4.png");
    JerryImg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
  
    Tom = createSprite(870,600);
    Tom.addAnimation("gatoSentado", TomImg1);
    Tom.scale = 0.2;

    Jerry = createSprite(130,600);
    Jerry.addAnimation("raton", JerryImg1);
    Jerry.scale = 0.2;

}

function draw() {

    background(forestImg);
    //Write condition here to evalute if tom and jerry collide

if (Tom.x - Jerry.x < (Tom.width - Jerry.width)/2) {

Tom.velocityX=0;
Tom.addAnimation("UltimaImagenGato", TomImg3);
Tom.changeAnimation("UltimaImagenGato");
Tom.x=300;
Tom.scale=0.2;

Jerry.addAnimation("UltraImagenRaton");
Jerry.changeAnimation("UltraImagenRaton");
Jerry.scale=0.2;




}

    drawSprites();

   // keyPressed();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){

Tom.velocityX = -5;
Tom.addAnimation("GatoCaminado", TomImg2);
Tom.changeAnimation("GatoCaminando");

    Jerry.addAnimation("ratonMolestando", JerryImg2);
Jerry.changeAnimation("ratonMolestando");
Jerry.frameDelay = 25;




  }
}

