const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Bers
var Wiz
var gameState = 0
var zombie, zombieImg, skeleton, skeletonImg 
var fireballImg, swordImg
var zombieGroup, skeletonGroup
var fireballGroup
var sword
var level = 1

function preload() {
swordImg = loadImage("sword.png")
fireballImg = loadImage("fireball.png")
bgImg = loadImage("background.png")
bersImg = loadImage("berserker.png")
zombieImg = loadImage("zombie.png")
wizardImg = loadImage("wizard.png")
skeletonImg = loadImage("skeleton.png")
dragonImg = loadImage("dragon.png")
bg2Img = loadImage("background2.jpg")
bg3Img = loadImage("background3.jpg")
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight - 75);
    engine = Engine.create();
    world = engine.world;

    berserker = createSprite(500,350)
    berserker.addImage(bersImg)
    
    berserker.setCollider("rectangle", 0, 0, 90, berserker.height)


    sword = createSprite(berserker.x + 60, berserker.y)
    sword.visible = false
    wizard = createSprite(750,350)
    wizard.scale = 0.75
    wizard.addImage(wizardImg)


    bersButton = createButton("Berserker")
    bersButton.position(460,420)

    wizardButton = createButton("Wizard")
    wizardButton.position(720, 420)

    Wiz = new Wizard()
    Bers = new Berserker()
}

function draw(){
    if(level == 1){

    
   background(bgImg)
    
    Engine.update(engine);
      
       
       this.wizardButton.mousePressed(()=>{gameState = 2
        wizard.x = 50
        wizard.y = 550})
       if(gameState == 2){
           bersButton.hide()
           wizardButton.hide()
            berserker.remove()
           Wiz.play()
       }
       this.bersButton.mousePressed(()=>{gameState = 1
        berserker.x = 50
        berserker.y = 550})
       if(gameState == 1){
        bersButton.hide()
        wizardButton.hide()
        wizard.remove()
           Bers.play()
       }
      
    textSize(100)
    fill("Red")
    stroke("Black")
    strokeWeight(5)
    textFont("Algerian")
    text("Dungeons",370,200)
}
    if(Wiz.score >= 3 && level == 1){
        level = 2
        Wiz.reset()
    }
    if(level == 2){
        background(bg2Img)
        if (gameState == 1 ){
            Bers.play()
            
        }
        if(gameState == 2){
            Wiz.play()
            if(keyWentDown("space")&& this.life>0){
                Wiz.delay()
            }
        }

    }
    if(Wiz.score >= 15 && level == 2){
        level = 3
    }
    if(level == 3){
        background(bg3Img)
    }


            

    drawSprites();
}



