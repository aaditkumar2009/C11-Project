var road,roadimage;
var jaxon,jaxonrunning;
var edges;
var lvb;
var rvb;

function preload(){
  //pre-load images
  jaxonrunning = loadAnimation("Runner-1.png","Runner-2.png");
  roadimage =loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  
  road = createSprite(200,200)
  road.addImage("road123",roadimage);
  road.scale = 1.2;
  road.velocityY =  50;
  rvb = createSprite(410,0,100,800);
  //rvb.visible = false;
  lvb = createSprite(0,0,100,800);
  //lvb.visible = false;

  jaxon = createSprite(180,340,50,50)
  jaxon.addAnimation("running",jaxonrunning);
  jaxon.scale = 0.055;

  


}

function draw() {
  background("white");
  jaxon.collide(lvb);
  jaxon.collide(rvb);
  if (road.y > 400){
    road.y = height/2;  
  }
  
  
  jaxon.x = mouseX;

  drawSprites();
  text(mouseX+""+mouseY,mouseX,mouseY);
  edges = createEdgeSprites();
  
  

}
