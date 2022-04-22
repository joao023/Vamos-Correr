var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);
 edges= createEdgeSprites();

// Movendo o fundo 
path=createSprite(200,200)
path.addImage(pathImg)


//Criando menino que corre 

boy=createSprite(200,300)
boy.addAnimation("running",boyImg)
boy.scale=0.08


// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(25,200,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary=createSprite(400,200,100,400)
rightBoundary.visible = false;

}


function draw() {
background(0);
path.velocityY = 4;

// Menino se movendo no eixo X com o mouse
boy.x=World.mouseX
boy.collide(edges[3]);
boy.collide(rightBoundary)
boy.collide(leftBoundary)
if (boy.x<100) {
boy.x=100
}

 //Reiniciar o fundo
 if (path.y>400) {
path.y=height/2
 }



 drawSprites();

 }




