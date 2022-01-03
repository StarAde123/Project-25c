class Paper {
    constructor(x,y,r) {
        var options={
            restitution: 0.3,
            friction: 0,
            density: 1.2
        }

        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    this.w = r;
    this.h = r;
    }

    display(){
        ImageMode(CENTER);
        image(this.image, 950, 200, 10, 10);
    }
}