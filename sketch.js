let line;
function setup() {
    let balls = []
    let radius = 100
    createCanvas(windowWidth, windowHeight);
    line = createGraphics(windowWidth, windowHeight);
    stroke(41);
    fill(204,12,0);
    let ballVector = createVector(0, windowHeight/2);
    for(i= 0; i<1;i++){
        ball = new Circle(radius,0.01,ballVector);
        append(balls, ball);
    }
    
}
function draw(){
    background(200);
    ellipse(ball.ballVector.x,ball.ballVector.y,ball.radius,ball.radius);
    line.stroke(255);
    line.ellipse(ball.pebblePosition.x,ball.pebblePosition.y,2,2);
    ball.pebble();
    ball.roll();
    image(line,0,0)
    if(ball.ballVector.x > windowWidth){
        ball.ballVector.x = 0;
    }
}
class Circle{
    constructor(radius,frequency, ballVector){
        this.radius = radius;
        this.frequency = frequency
        this.angularV =  PI * frequency;
        this.angle = 180;
        this.velocity = this.angularV * this.radius /4;
        this.ballVector = ballVector;
        this.pebblePosition = createVector(this.ballVector.x + this.radius, this.ballVector.y);
    }

    roll(){
        this.angle += this.angularV * 180 / PI/100;
        if(this.angle >= 360){
            this.angle =0;
        }
        this.ballVector.x += this.velocity;
        
    }
    pebble(){
        this.pebbleVector = createVector(cos(this.angle) * this.radius,sin(this.angle)* this.radius);
        if(this.angle > 90 || this.angle < 270){
            this.pebblePosition.x = this.ballVector.x - this.pebbleVector.x /2 ;}
        else if(this.angle < 90 || this.angle > 270){
            this.pebblePosition.x = this.ballVector.x + this.pebbleVector.x /2;}
        if (this.angle < 180 || this.angle > 0){
            this.pebblePosition.y = this.ballVector.y + this.pebbleVector.y /2;
        }
        else if (this.angle > 180 || this.angle < 0){
            this.pebblePosition.y = this.ballVector.y - this.pebbleVector.y /2;
        }
    }
}
