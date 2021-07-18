var iss, spaceCraft, spaceCraftL, spaceCraftR, spaceCraftF
var issImage, spaceCraftImage, spaceCraftLImage, spaceCraftRImage, spaceCraftFImage
var hasDocked = false

function preload(){
  issImage = loadImage("iss.png")
  spaceCraftImage = loadImage("spacecraft1.png")
  spaceCraftFImage = loadImage("spacecraft2.png")
  spaceCraftLImage = loadImage("spacecraft3.png")
  spaceCraftRImage = loadImage("spacecraft4.png")
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage("base", issImage)
  iss.scale = 0.5

  spaceCraft = createSprite(400, 300, 50, 50)
  spaceCraft.addImage(spaceCraftImage)

  spaceCraft = createSprite(400, 300, 50, 50)
  spaceCraftL.addImage(spaceCraftLImage)

  spaceCraft = createSprite(400, 300, 50, 50)
  spaceCraftF.addImage(spaceCraftFImage)

  spaceCraft = createSprite(400, 300, 50, 50)
  spaceCraftR.addImage(spaceCraftRImage)
  

}

function draw() {
  background("spacebg.jpg");  

  if(keyDown(LEFT_ARROW)){
    spaceCraft.addImage(spaceCraftLImage)
    spaceCraft.x = spaceCraft.x - 10
  }

  if(keyDown(RIGHT_ARROW)){
    spaceCraft.addImage(spaceCraftRImage)
    spaceCraft.x = spaceCraft.x + 10
  }

  if(keyDown(DOWN_ARROW)){
    spaceCraft.addImage(spaceCraftLImage)
  }

  if(keyDown(UP_ARROW)){
    spaceCraft.y = spaceCraft.y - 10
  }

  if(spaceCraft.x === 300 && spaceCraft.y === 250){
    hasDocked = true;
    text("Docking Successful!", 400, 350)
  }

  if(hasDocked){
    var rand = Math.round(random(1,7));
    switch(rand) {
      case 1: spaceCraft.x = 100
              break;
      case 2: spaceCraft.x = 200
              break;
      case 3: spaceCraft.x = 300
              break;
      case 4: spaceCraft.x = 400
              break;
      case 5: spaceCraft.x = 500
              break;
      case 6: spaceCraft.x = 600
              break;
      default: break;
  }
}
  drawSprites();
}