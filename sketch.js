const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, tree, treeImage, boy, boyImg;
var mango1, mango2, mango3, mango4, mango5, stone, chain;

function preload() {
    treeImage = loadImage("tree.png");
    boyImg = loadImage("boy.png")
}

function setup() {
    createCanvas(1200, 700);


    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 680, 1200, 20);
    boy = createSprite(200, 570, 100, 200);
    boy.addImage(boyImg);
    boy.scale = 0.15;
    mango1 = new Mango(750, 350, 30);
    mango2 = new Mango(850, 250, 30);
    mango3 = new Mango(950, 350, 30);
    mango4 = new Mango(1100, 350, 30);
    mango5 = new Mango(1000, 250, 30)
    stone = new Stone(50, 50, 50);
    tree = createSprite(950, 420, 100, 500);
    tree.addImage(treeImage);
    tree.scale = 0.42;
    chain = new SlingShot(stone.body, { x: 120, y: 480 })
    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    background(255);
    drawSprites();
    ground.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    stone.display();
    chain.display();
    isTouching(stone, mango1);
    isTouching(stone, mango2);
    isTouching(stone, mango3);
    isTouching(stone, mango4);
    isTouching(stone, mango5);
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    chain.fly()
}

function isTouching(stone1, mango1) {
    var mangoPosition = mango1.body.position;
    var stonePosition = stone1.body.position;
    var distance = dist(stonePosition.x, stonePosition.y, mangoPosition.x, mangoPosition.y);
    if (distance <= mango1.r + stone1.r) {
        Matter.body.setStatic(mango1.body, false)
    }
}