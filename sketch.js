var form;
var song;
var songs = new Array();
songs[0] = 'Chahun_Mein_Yaa_Na.mp3';
songs[1] = 'Humsafar.mp3';
songs[2] = 'Khairiyat.mp3';
songs[3] = 'Nazm Nazm.mp3';
songs[4] = 'Taaron_Ke_Shehar.mp3';
songs[5] = 'Tera Ban Jaunga.mp3';
songs[6] = 'Tujhe Kitna Chahne Lage.mp3';
songs[7] = 'Tum Hi Aana.mp3';
songs[8] = 'Tum Se Hi.mp3';
songs[9] = 'Yeh Aaina.mp3';

var cover;
var covers = new Array();
var play,pause,next,previous;
var minute;
var slider;
var scrollSlider;

var songCount = songs.length; 

var currentSong = 0;         


minute = 0;

function preload(){
    song = loadSound('Songs/'+songs[currentSong]);
    covers[1] = loadImage('Images/humsafar.jpg');
    covers[2] = loadImage('Images/kariyat.jpg');
    covers[3] = loadImage('Images/nazm.jpg');
    covers[0] = loadImage('Images/chahun.jpg');
    covers[4] = loadImage('Images/taaron.jpg');
    covers[5] = loadImage('Images/imgg.jpg');
    covers[6] = loadImage('Images/imgg.jpg');
    covers[7] = loadImage('Images/tumhi.jpg');
    covers[8] = loadImage('Images/tumse.jpeg');
    covers[9] = loadImage('Images/imgg.jpg');

}

function setup() {
  createCanvas(500,500);
//Play Button
play = createButton('Play');
play.position(displayWidth/2-165,displayHeight/2+105);
play.size(75,25);
play.style('background-color', 'rgb(240, 246, 247, 1.00)');
play.style('box-shadow', '0 8px 16px 0 rgba(0,0,0,0.2)', '0 6px 20px 0 rgba(0,0,0,0.19)');
play.style('hover','background-color:red')
play.style('border-color','#669bd3ff');
play.style('border-radius','20px');

//Pause button
pause = createButton('Pause');
pause.position(displayWidth/2-90,displayHeight/2+105)
pause.size(75,25);
pause.style('background-color', 'rgb(240, 246, 247, 1.00)');
pause.style('box-shadow', '0 8px 16px 0 rgba(0,0,0,0.2)', '0 6px 20px 0 rgba(0,0,0,0.19)');
pause.style('hover', '{background-color: #3E8E41}')
pause.style('border-radius','20px');
pause.style('border-color','#669bd3ff');


//Next Button
next = createButton('Next');
next.position(displayWidth/2+60,displayHeight/2+105);
next.size(75,25);
next.style('background-color', 'rgb(240, 246, 247, 1.00)');
next.style('box-shadow', '0 8px 16px 0 rgba(0,0,0,0.2)', '0 6px 20px 0 rgba(0,0,0,0.19)');
next.style('hover', '{background-color: #3E8E41}')
next.style('border-radius','20px');
next.style('border-color','#669bd3ff');


//Previous Button
previous = createButton('Previous');
previous.position(displayWidth/2-15,displayHeight/2+105)
previous.size(75,25);
previous.style('background-color', 'rgb(240, 246, 247, 1.00)');
previous.style('box-shadow', '0 8px 16px 0 rgba(0,0,0,0.2)', '0 6px 20px 0 rgba(0,0,0,0.19)');
previous.style('hover', '{background-color: #3E8E41}')
previous.style('border-radius','20px');
previous.style('border-color','#669bd3ff');

slider = createSlider(0,1,0.5,0.01);
slider.position(displayWidth/2+25,displayHeight/2+85);
slider.style('height', '8px');


}

function draw() {
  background ("Crimson");

  drawSprites();
  textSize(30);
  fill("red")
 
  song.setVolume(slider.value());

  textFont('Bitter');
  textSize(20);
  fill(0);
  text(song,displayWidth/2,displayHeight/2-10);
  text(songs[currentSong], 10, 400);
  image(covers[currentSong],16,30)

play.mousePressed(()=>{
  playSound();
});
pause.mousePressed(stopSound);

next.mousePressed(() =>{
  currentSong = currentSong+1;
  nextSong(currentSong);

});

previous.mousePressed(()=>{
  currentSong = currentSong-1;
  previousSong(currentSong)

});

}

function nextSong(songNumber){

  if(song.isPlaying()){
    song.stop();
  }

  song = loadSound('Songs/'+songs[songNumber],resumePlay);

  if (currentSong === 10) {
    currentSong = 0;
  }
}

function previousSong(songNumber){

  if(song.isPlaying()){
    song.stop();
  }
  song = loadSound('Songs/'+songs[songNumber],resumePlay);
  if (currentSong < 0) {
    currentSong = 9;
  }
}

function resumePlay(){
  if(song.isPlaying()){
    song.stop();
  }
  else{
    song.play();
  }
}

function playSound(){

  if (song.isPlaying() == false) {
    song.play();

  }
}

function stopSound(){
  if (song.isPlaying() == true) {
    song.stop();
  }
}
