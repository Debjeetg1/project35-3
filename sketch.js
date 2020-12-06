var dog , dogimg , doghappyimg;
var database;
var foodS , foodStack;

function preload()
{
  dogimg = loadImage("images/dogImg.png");
  doghappyimg = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(800, 700);

  foodStack = database.ref('Food');
  foodStack.on("value" , readStock);
  
  dog = createSprite(400 , 600);
  dog.addImage(dogimg);
  dog.scale = 0.2;
  
}


function draw() {  
  background(46, 139, 87);
  
  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage(doghappyimg);
  }
  else
  {
    dog.addImage(dogimg);
  }
  
  drawSprites();

   stroke("white");
  textSize(50);
  text("Food left: " + foodS , 200 , 100);



}

function readStock(data)
{
  foodS = data.val();

 
}

function writeStock(x)
{
  if(x <= 0)
 {
   x = 0
 }
 else
 {
   x -= 1;
 }
 
 
  database.ref('/').set({
   Food: x 
 })


}



