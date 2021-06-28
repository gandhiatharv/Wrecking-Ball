class Bob {
    constructor (x, y){
        var options = {
            restitution:0.2, 
            friction:0.9, 
            density:1.2
        }
    this.radius = 60; 
    this.body = Bodies.circle(x, y, this.radius, options); 
    this.x = x; 
    this.y = y;
    this.image = loadImage("b.png");

    World.add(world, this.body)
    }

    display() {
        push(); 
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER); 
        fill("hotpink"); 
        image(this.image, 0, 0, this.radius*3.2, this.radius*3); 
        pop(); 
    }

}