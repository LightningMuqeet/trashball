class Log{

    constructor(x,y,width,height)
    {
        this.body = loadImage("sprites/dustbingreen.png")
        var options = {
            isStatic: true,
            restitution: 0.8,
            friction: 1.8,
            density: 1.0
        
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    
    display(){
        var pos  = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    
    }
    };