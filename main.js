x = 0;
y = 0;

apple="";
speak_data="";
to_number=0;
draw_apple="";

function preload(){
apple=loadImage("apple.png");
}

var recognition=new window.webkitSpeechRecognition;

function start(){
document.getElementById("status").innerHTML="System Is Listening, Please Speak.";
recognition.start();
}

recognition.onresult=function(event){
console.log(event);
var content=event.results[0][0].transcript;
to_number=Number(content);
document.getElementById("status").innerHTML="The Speech Has Been Recognised: "+content;

if(Number.isInteger(to_number)){
    document.getElementById("status").innerHTML="Started Drawing Apple";
    draw_apple="set";
}
else{
    document.getElementById("status").innerHTML="The Speech Has Not Recognised A Number";
}

}
function speak(){ var synth = window.speechSynthesis; var utterThis = new SpeechSynthesisUtterance(speak_data); synth.speak(utterThis); speak_data = ""; }
function setup(){
canvas = createCanvas(900, 600);
canvas.center();
}

function draw(){
if(draw_apple=="set"){
for(i=1; i<=to_number; i++){
    x = Math.floor(Math.random()*900);
    y = Math.floor(Math.random()*600);
    image (apple, x, y, 50, 50);
}
document.getElementById("status").innerHTML=to_number+" Apples Drawn";
speak_data=to_number+" Apples Drawn";
speak();
draw_apple="";
}
}