//https://youtu.be/RrNNCgBOK8I

let objJuego;
let fondoMarino, gana, pierde;
let menu, instrucciones, submarino;
let sonidoGolpe, win, lose, musicaFondo;
let enemigo1, enemigo2, enemigo3, proyectil;
let buzo1, buzo2, buzo3, buzo4, buzo5;
let objeto1, objeto2, objeto3;

function preload(){
 // Sprites y Fondo
  fondoMarino = loadImage("assets/fondo-marino.png");
  menu = loadImage('assets/menu.png');
  instrucciones = loadImage('assets/instrucciones.png');
  gana = loadImage('assets/gana.png');
  pierde = loadImage('assets/pierde.png');
  submarino = loadImage('assets/submarino.png');
  proyectil = loadImage('assets/proyectil.png');
  objeto1 = loadImage('assets/objetoUp.png');
  objeto2 = loadImage('assets/objetoMiddle.png');
  objeto3 = loadImage('assets/objetoDown.png');
  
  //Personaje sprites
  buzo1 = loadImage("assets/buzoIdle.png");
  buzo2 = loadImage("assets/buzoUp.png");
  buzo3 = loadImage("assets/buzoDown.png");
  buzo4 = loadImage("assets/buzoRight.png");
  buzo5 = loadImage("assets/buzoLeft.png");
  
  //Enemigo sprites
  enemigo1 = loadImage("assets/enemigoUp.png");
  enemigo2 = loadImage("assets/enemigoMiddle.png");
  enemigo3 = loadImage("assets/enemigoDown.png");

 // Sonidos y Música
 sonidoGolpe = loadSound('assets/Punch.mp3');
 win = loadSound('assets/Win.mp3');
 lose = loadSound('assets/Lose.mp3');
 musicaFondo = loadSound('assets/Music.mp3');
}

function setup() {
 createCanvas(800,400);
 objJuego = new Juego();
}


function draw() {
 objJuego.dibujar();
}

function keyPressed(){
  //Instrucciones y Créditos
  if(objJuego.estado === "menu"){
    objJuego.estado = "instrucciones";
    objJuego.tiempo = millis();
  }
  
  //Reiniciar con la tecla R
  if(keyCode === 82 && objJuego.estado !== "jugando"){
    objJuego.reiniciar();
   }
   
  if(!musicaFondo.isPlaying()){
    musicaFondo.loop();
    musicaFondo.setVolume(0.4);
  }
 }
