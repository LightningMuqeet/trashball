class Paper{

constructor()
{

    var options = {
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
    }
    this.body = Bodies.circle(100, 200, 20, options);
    this.image = loadImage("paper.png");

    World.add(world, this.body);
}

display(){
    
    var pos  = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 70,70);
    pop();

}
}