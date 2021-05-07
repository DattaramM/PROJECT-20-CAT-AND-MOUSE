// Garden(Background)
var canvas,  backgroundImage;

// Tom
var tom, tom_sleepingImage, tom_runningAnimation, tom_sittingImage;

// Jerry
var jerry, jerry_eatingImage, jerry_teasingAnimation, jerry_standingImage; 

// Preload Function
function preload() {
    //load the images here

    // setting background image
    backgroundImage = loadImage("images/garden.png");

    // loading Tom sleeping image
    tom_sleepingImage = loadAnimation("images/cat1.png");
    // loading Tom running animation
    tom_runningAnimation = loadAnimation("images/cat2.png", "images/cat3.png");
    // loading Tom sitting image
    tom_sittingImage = loadAnimation("images/cat4.png");

    // loading Jerry eating image
    jerry_eatingImage = loadAnimation("images/mouse1.png");
    // loading Jerry dancing animation
    jerry_teasingAnimation = loadAnimation("images/mouse2.png", "images/mouse3.png");
    // loading Jerry standing image
    jerry_standingImage = loadAnimation("images/mouse4.png");
}

// setup Function
function setup(){
    // creating canvas
    canvas = createCanvas(1000,800);

    // create tom and jerry sprites here

    // creating tom sprite
    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tom_sleepingImage);
    tom.scale = 0.2;

    // creating jerry sprite
    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryEating", jerry_eatingImage);
    jerry.scale = 0.15;
}

// draw Function
function draw() {
    // setting background color
    background(backgroundImage);

    //background(225);

    //tom.x = mouseX;
    //tom.y = mouseY;

    // Write condition here to evalute if tom and jerry collide
    if (tom.x - jerry.x < (tom.width - jerry.width)/2) {
        tom.velocityX=0;
        tom.addAnimation("tomSitting", tom_sittingImage);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomSitting");
        jerry.addAnimation("jerryStanding", jerry_standingImage);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryStanding");
       }

    // drawSprites function to draw sprites
    drawSprites();
    
    // Logging frameCount in the console
    //console.log(frameCount);

    // Logging tom's and jerry's width divided by two sum
    //console.log(tom.width/2 + jerry.width/2);

    // Logging tom's and jerry's x value difference and tom's and jerry's width divided by two sum
    //console.log(tom.x - jerry.x, (tom.width + jerry.width)/2);
    
    // Logging tom's and jerry's x value difference
    console.log(tom.x - jerry.x);
}

// KeyPressed Function
function keyPressed(){
    // For moving and changing animation write code here
    if (keyCode === LEFT_ARROW) {
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tom_runningAnimation);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerry_teasingAnimation);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }    
}
