mustash_x=0;
mustash_y=0;
function preload(){
 img= loadImage("m.png")
}

function setup(){
 canvas= createCanvas(530,380);
 canvas.center();
 webcam= createCapture(VIDEO);
 webcam.size(530,380);
 webcam.hide();
 poseNet= ml5.poseNet(webcam, modelLoaded);
 poseNet.on("pose", gotPoses);
 
}
function modelLoaded(){
    console.log("The poseNet has been initialized")
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    mustash_x= results[0].pose.nose.x-30;
    mustash_y= results[0].pose.nose.y;
 }
}

function draw(){
 image(webcam,0,0,530,430);
 image(img,mustash_x,mustash_y,60,45);
}

function snap(){
    save("C114,C115,C116-Project.jpg");
}