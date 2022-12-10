song1 = "";
song2 = "";

function setup(){
   canvas = createCanvas(550,500);
   canvas.center();

   video = createCapture(VIDEO);
   video.hide();
}

function preload(){
   song1 = loadSound("Song1.mp3");
   song2 = loadSound("Song2.mp3");
}

function draw(){
   image(video,0,0,550,500);
}