var cat,cat2,cat3,cat4,bg,mouse,mouse2,mouse3,mouse4;
var catImg,cat2Img,cat3Img,bgImg,mouseImg,mouse2Img,mouse3Img,mouse4Img;

function preload() {
    //load the images here
    catImg=loadImage("cat1.png");
    cat2Img=loadAnimation("cat2.png,cat3.png");
    cat4Img=loadImage("cat4.png");
    bgImg=loadImage("garden.png");
    mouseImg=loadImage("mouse1.png");
    mouse2Img=loadAnimation("mouse2.png,mouse3.png");
    mouse4Img=loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    bg=createSprite(500,800);
    bg.addImage(bgImg);

    //create tom and jerry sprites here
    cat=createSprite(400,400)
    cat.addImage(catImg);
    cat.scale=0.3;
}

function draw() {

    background(255);

   
    //Write condition here to evalute if tom and jerry collide
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
