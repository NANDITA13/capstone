var PLAY = 1;
var END = 0;
var gameState = PLAY;


var covid , covidImage , covidGroup;

var mask, maskImage

var sanitizer , sanitizerImage;

var backGround , backGroundImage;

var ground;

var score;

var gameOver , gameOverImage;

var restart , restartImage;



function preload(){

  covidImage = loadImage ("covid.jpg");

  maskImage = loadImage ("MASK.jpg")

  sanitizerImage = loadImage ("SANITIZER.png");
 
  gameOverImage = loadImage ("gameOver.png");

  restartImage = loadImage ("restart.png");

}


function setup(){

  createCanvas(1200, 300);
 
  mask = createSprite (500, 250 );
      mask.addImage (maskImage);
      mask.scale = 0.9;
      mask.velocityX = 3;

      sanitizer = createSprite (20,20);
      sanitizer.addImage (sanitizerImage);
      sanitizer.scale = 0.9;

      gameOver = createSprite (700,150);
      gameOver .addImage (gameOverImage);
      gameOver.scale = 0.6
      gameOver.vicible = false;

      restart = createSprite (700,150);
      restart .addImage (restartImage);
      restart.scale = 0.6
      restart.vicible = false;

      covidGroup = createGroup();

       score = 0;

}

function draw(){



    background (100);

    text("SANITIZER: "+ score, 1000,20);

    if(gameState === PLAY){

        mask.velocityX = 3;


        mask.visible = true;
        
        //if( mask . istouching ( covid)) {
       
          //gameOver.visible = true;
          //restart.visible = true;

          //gameStart = END;
           
        //}
         

        if(keyDown ("space")) {
        
          score = score+1;

          mask.velocityY = 12;

          mask.visible = true;                                                                 
        }
      

    
    }



    else if (gameState === END) {

      reset();

    }
  
    drawSprite();
}




function covidGroup () {

  if (frameCount % 60 === 0) {

    covid = createSprite(600,100,40,10);

   covid.y = Math.round(random(10,60));

   coved.addImage(covidImage);

   covid.scale = 0.5;

   covid.velocityX = -3;
   
    
   covid.lifetime = 134;
   
   
   covid.depth = trex.depth;
   mask.depth = mask.depth + 1;
   
  
  covidGroup.add(covid);

  }
}


function reset(){
  
  gameState = PLAY;

  gameOver.visible = false;
  restart.visible = false;

  covidGroup.destroyEach();

  mask.destroyEach();

}
