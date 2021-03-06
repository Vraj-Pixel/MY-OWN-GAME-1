var road,roadImage;
var car,carImage;

function preload(){
  roadImage=loadImage('track.png');
  carImage=loadImage('Car2.png');
}

function setup(){
 createCanvas(600,600);

 road=createSprite(300,300);
 road.addImage(roadImage);
 road.scale=1;

 car=createSprite(300,500);
 car.addImage(carImage);
 car.scale=0.5
}

function draw(){
  road.velocityY=2;
  if(road.y>400){
    road.y=300;
  }
  //console.log(road.y);
  spawnVehicles();
 
  drawSprites();
}

function spawnVehicles(){   
  if(frameCount%100===0){
    
    vehicle1=createSprite(35,600,30,30);
    var direction=Math.round(random(1,2));
    if(direction===1){
      var randX=Math.round(random(300,500));
      vehicle1.x=randX;
      vehicle1.y=600;
      vehicle1.velocityY=-2;
    }
    else{
      var randX=Math.round(random(100,300));
      vehicle1.x=randX;
      vehicle1.y=0; 
      vehicle1.velocityY=5;
    }
    
  }

}