class Stone {
    constructor(x, y, radius) {
        var options = {
            'isStatic': false,
            'restitution': 0.5,
            'friction': 1.0
        }
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.image = loadImage("stone.png");
        this.body = Bodies.circle(x, y, radius, options)
        World.add(world, this.body)
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, 0, 0, this.radius * 2, this.radius * 2);
        pop();
    }
}