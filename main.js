function preload(){

}
function setup() {
    canvas=createCanvas(640,480);
    
    canvas.position(110,500);
    
    video = createCapture(VIDEO);
}
function take_snapshot(){
    save('something.png');
}
function draw(){
    ellipse(56, 46, 55, 80);
    rect(250, 20, 100, 100);
    circle(30, 350, 20,);

}
