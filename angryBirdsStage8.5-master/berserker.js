class Berserker{
    constructor (){
        this.life = 1
        this.zombieGroup = new Group()
        this.skeletonGroup = new Group()
        this.score = 0
    }
    reset(){
        this.score = 0
    }
    play(){
        berserker.debug = true
        if(frameCount % Math.round(random(100,250))== 0){
            var zombie = createSprite(850, Math.round(random(300,500)), 10, 10)
            zombie.addImage (zombieImg)
            zombie.scale = 0.5
            zombie.velocityX = -5
            this.zombieGroup.add(zombie)
            zombie.setCollider("rectangle", 0, 0, 200, zombie.height)

            }
            if(frameCount % Math.round(random(100,250))== 0){
            var skeleton = createSprite(850, random(300,500), 10, 10)
            skeleton.addImage (skeletonImg)
            skeleton.velocityX = -3
            this.skeletonGroup.add(skeleton)
            skeleton.setCollider("rectangle", 0, 0, 200, skeleton.height)
            }
            sword.addImage(swordImg)
            sword.scale = 0.3
            sword.visible = true
            sword.x = berserker.x + 60
            sword.y = berserker.y

            textSize(35)
            fill("blue")
            stroke("Black")
            strokeWeight(5)
            textFont("Algerian")
                text ("score = " + this.score, displayWidth - 200, 100)
                fill("red")
                text("lives = " + this.life, displayWidth - 200, 50)
                

 if(keyDown("w")){
           berserker.y = berserker.y - 5
           sword.y = berserker.y 
       }
       if(keyDown("s")){
        berserker.y = berserker.y + 5
        sword.y = berserker.y
    }
    if(keyDown("a")){
        berserker.x = berserker.x - 5
        sword.x = berserker.x + 60
    }
    if(keyDown("d")){
        berserker.x = berserker.x + 5
        sword.x = berserker.x + 60
    }
    if(keyWentDown("space")){
        sword.rotation = 45
        if(sword.isTouching(this.zombieGroup)){
            this.zombieGroup.destroyEach()
            this.score = this.score + 1
        }
        if(sword.isTouching(this.skeletonGroup)){    
            this.skeletonGroup.destroyEach()
            this.score = this.score + 1
            console.log("hi")
        }
    }
    if(keyWentUp("space")){
        sword.rotation = 0
    }
    
    if(berserker.isTouching(this.zombieGroup)){
        this.zombieGroup.destroyEach()
        this.life = this.life - 1
    }
    if(berserker.isTouching(this.skeletonGroup)){    
        this.skeletonGroup.destroyEach()
        this.life = this.life - 1
        console.log("hi")
    }
    if(this.life == 0){ 
            textSize(75)
           text ("game over!", displayWidth/2 - 250, displayHeight/2)
           berserker.destroy()
           sword.destroy()
           this.zombieGroup.destroyEach()
           this.skeletonGroup.destroyEach()
           
    }
}
}