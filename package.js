class package{
    constructor(x,y,width,height){




        var options = {
        
        restitution: 1.0
        } 
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        
        
        
        
        
        }
        
        display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
        


        if(keydown(down_arrow)){
         
        package = createSprite(helicopterSprite.x,helicopterSprite.y);
        package.addImage(package.png);
        package.velocityX = 100000000000000000000000000000000000000000000000;
        package.restitution = 1;
        package.bounceOff(ground);
        
    


        }






        
        
        
        
        }
        
        
}
       








