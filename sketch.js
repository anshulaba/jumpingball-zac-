var canvas;
var music;

function preload()
{
    music = loadSound("music.mp3");
}



function setup()
{
    canvas = createCanvas(800,600);
    
    box1 = createSprite(0,590,250,20);
    box1.shapeColor= "blue";
    box2 = createSprite(250,590,150,20);
    box2.shapeColor= "orange";
    box3 = createSprite(450,590,150,20);
    box3.shapeColor= "pink";
    box4 = createSprite(650,590,150,20);
    box4.shapeColor= "green";

    ball = createSprite(400,400,40,40);
    ball.shapeColor= "black";

    ball.velocityX = 3;
    ball.velocityY = 4;

}



function draw() 
{
    background(rgb(169,169,169));

  

    edges=createEdgeSprites();

    ball.bounceOff(edges);
    
    if(ball.isTouching(box1))
    {
        ball.shapeColor= "blue";
    }

    if(ball.isTouching(box2))
    {
        ball.shapeColor= "orange";
    }

    if(ball.isTouching(box3))
    {
        ball.shapeColor= "pink";
    }

    if(ball.isTouching(box4))
    {
        ball.shapeColor= "green";
    }
    drawSprites();
    
}
