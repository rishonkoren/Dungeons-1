class Wizard{
    constructor (){
        this.life = 1
        this.fireballGroup = new Group()
        this.zombieGroup = new Group()
        this.skeletonGroup = new Group()
        this.score = 0
    }
    reset(){
        this.score = 0
    }
    play(){
    var fireball
        
        if(frameCount % Math.round(random(100,250))== 0){
        var zombie = createSprite(850, Math.round(random(300,500)), 10, 10)
        zombie.addImage (zombieImg)
        this.zombieGroup.add (zombie)
        zombie.scale = 0.5
        zombie.debug = true
        zombie.setCollider("rectangle", 0, 0, 200, zombie.height)
        zombie.velocityX = -5
        }
        if(frameCount % Math.round(random(100,250))== 0){
        var skeleton = createSprite(850, random(300,500), 10, 10)
        skeleton.addImage (skeletonImg)
        skeleton.debug = true
        skeleton.setCollider("rectangle", 0, 0, 200, skeleton.height)
        skeleton.velocityX = -3
        this.skeletonGroup.add (skeleton)
        }
        textSize(35)
    fill("blue")
    stroke("Black")
    strokeWeight(5)
    textFont("Algerian")
        text ("score = " + this.score, displayWidth - 200, 100)
        fill("red")
                text("lives = " + this.life, displayWidth - 200, 50)
        if(keyDown("w")){
            wizard.y = wizard.y - 5
        }
        if(keyDown("s")){
         wizard.y = wizard.y + 5
     }
     if(keyDown("a")){
         wizard.x = wizard.x - 5
     }
     if(keyDown("d")){
         wizard.x = wizard.x + 5
     }
     

     if(this.fireballGroup.isTouching(this.zombieGroup)){
        this.fireballGroup.destroyEach()
        this.zombieGroup.destroyEach()
        this.score = this.score + 1
    }
    if(this.fireballGroup.isTouching(this.skeletonGroup)){    
        this.skeletonGroup.destroyEach()
        this.fireballGroup.destroyEach()
        this.score = this.score + 1
        console.log("hi")
    }
    if(wizard.isTouching(this.zombieGroup)){
        this.zombieGroup.destroyEach()
        this.life = this.life - 1
    }
    if(wizard.isTouching(this.skeletonGroup)){    
        this.skeletonGroup.destroyEach()
        this.life = this.life - 1
        console.log("hi")
    }

    if(this.life == 0){ 
        textSize(75)
       text ("game over!", displayWidth/2 - 250, displayHeight/2)
       wizard.destroy()
       this.zombieGroup.destroyEach()
       this.skeletonGroup.destroyEach()
              
}

    }
    delay (){

    
    setTimeout(function(){
        
            
            fireball = createSprite(wizard.x + 5 , wizard.y)
            fireball.addImage(fireballImg)
            fireball.debug = true
            fireball.setCollider("rectangle", 0, 0, fireball.width, fireball.height)
            fireball.velocityX = 10
            fireball.scale = 0.5
            this.fireballGroup.add(fireball)
          
        },1000)
    }
}