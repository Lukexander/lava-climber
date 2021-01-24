var door,doorImg;
var ghost,ghostImg;
var climber,climberImg;
var doorGroup,climberGroup;
var tower,towerImg;
var invisible,invisibleGroup;

function preload(){
doorImg = loadImage("fire.png");
climberImg = loadImage("climber.png");
ghostImg = loadImage("767887988_preview_Lava Bat.png");
towerImg = loadImage("https___specials-images.forbesimg.com_imageserve_1012404208_0x0.jpg");

}

function setup(){
createCanvas(600,600);

tower = createSprite(300,300);
tower.addImage("tower",towerImg);
tower.velocityY=2;
ghost = createSprite(200,200,50,50);
ghost.scale=0.4;
ghost.addImage("ghost",ghostImg);

doorGroup = new Group();
climberGroup = new Group();
invisibleGroup = new Group();
}

function draw(){

if (tower.y>400){
tower.y=300;
}


ghost.velocityY=ghost.velocityY + 0.8;

if(keyDown("space")){
ghost.velocityY=-10;
}

if(keyDown("left")){
ghost.x=ghost.x-2;

}

if(keyDown("right")){
ghost.x=ghost.x+2;


}


createDoors();

if (climberGroup.isTouching(ghost)){
ghost.velocityY=0
}



drawSprites();

if(invisibleGroup.isTouching(ghost)|| ghost.y>600){
ghost.destroy();
textSize(50);
fill("blue");
text("GameOver",300,300);
tower.velocityy=0
doorGroup. setVelocityEach(0)
climberGroup. setVelocityEach(0)

}

}



function createDoors(){

if (frameCount % 240 === 0){
door = createSprite(200,-50);
climber = createSprite(200,10);
invisible =createSprite(200,15)
invisible.width=climber.width
invisible.height= 2

door.x=Math.round(random(120,400));
climber.x=door.x;
invisible.x=door.x;

door.addImage("door",doorImg);
climber.addImage("climber",climberImg);
invisible.visible=false;

door.velocityY=2;
climber.velocityY=2;
invisible.velocityY=2;

door.depth=ghost.depth;
ghost.depth=ghost.depth+1;

door.lifetime=800;
climber.lifetime=800;
invisible.lifetime=800;

doorGroup.add(door);
climberGroup.add(climber);
invisibleGroup.add(invisible);

invisible.debug= true

  door.scale=0.05
}
}
