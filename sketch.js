var fixedd
var fixedd2
var fixedd3
var fixedd4
var movingd


function setup() {
  createCanvas(800,400);
  
  fixedd = createSprite (790,200, 20, 400)
  fixedd.shapeColor = "pink"

  movingd = createSprite (400, 200, 80, 30)
  movingd.shapeColor = "lightblue"


  fixedd2 = createSprite (400, 390, 800, 20)
  fixedd2.shapeColor = "pink"

  fixedd3 = createSprite (400, 10, 800, 20)
  fixedd3.shapeColor = "pink"

  fixedd4 = createSprite (10, 390, 20, 800)
  fixedd4.shapeColor = "pink"

}

function draw() {
 
console.log (movingd.x - fixedd.x)

  background ("pink")
  
  movingd.x = mouseX
  movingd.y = mouseY
  
  if(movingd.x - fixedd.x < fixedd.width/2 + movingd.width/2 && fixedd.x - movingd.x < fixedd.width/2 + movingd.width/2 && fixedd.y - movingd.y < fixedd.height/2 + movingd.height/2 && movingd.y - fixedd.y < fixedd.height/2 + movingd.height/2){

    fixedd.shapeColor = "lime"
    movingd.shapeColor = "Yellow"
}

else {

  fixedd.shapeColor = "mediumpurple"

  movingd.shapeColor = "lightblue"


}




if(movingd.x - fixedd2.x < fixedd2.width/2 + movingd.width/2 && fixedd2.x - movingd.x < fixedd2.width/2 + movingd.width/2 && fixedd2.y - movingd.y < fixedd2.height/2 + movingd.height/2 && movingd.y - fixedd2.y < fixedd2.height/2 + movingd.height/2){

  fixedd2.shapeColor = "seagreen"
  movingd.shapeColor = "deepPink"

}

else {

  fixedd2.shapeColor = "pink"

  movingd.shapeColor = "lightblue"


}

if(movingd.x - fixedd3.x < fixedd3.width/2 + movingd.width/2 && fixedd3.x - movingd.x < fixedd3.width/2 + movingd.width/2 && fixedd3.y - movingd.y < fixedd3.height/2 + movingd.height/2 && movingd.y - fixedd3.y < fixedd3.height/2 + movingd.height/2){

  fixedd3.shapeColor = "fuchsia"
  movingd.shapeColor = "green"
}

else {

fixedd3.shapeColor = "pink"

movingd.shapeColor = "lightblue"


}

if(movingd.x - fixedd4.x < fixedd4.width/2 + movingd.width/2 && fixedd4.x - movingd.x < fixedd4.width/2 + movingd.width/2 && fixedd4.y - movingd.y < fixedd4.height/2 + movingd.height/2 && movingd.y - fixedd4.y < fixedd4.height/2 + movingd.height/2){

  fixedd4.shapeColor = "gold"
  movingd.shapeColor = "indigo"
}

else {

fixedd4.shapeColor = "pink"

movingd.shapeColor = "lightblue"


}

  drawSprites();




}