//Joaquin Pazos comision 5
// LA ANIMACIÓN SE REINICIA CON LA LETRA r

let framesMario = [];
let saltoMario;
let framesEnemigo = [];
let frameActual = 0;
let frameHongo = 0;
let velocidad = 2;
let fondo;
let posicionFondo = 0;
let posicionEnemigo = 500;
let estadoMario = "caminar";
let subiendo = true;
let posX =40;
let posY = 455;
let enemigoSaltado = false;
let tiempoInicio;
let duracion = 5000;


function preload(){

  for(let i = 0; i<3; i++){
    framesMario[i] = loadImage("assets/walk_"+ i + ".png"); //carga de sprites Mario
  }

  saltoMario = loadImage("assets/jump_0.png");
  
  for (let e = 0; e < 2; e++){
    framesEnemigo[e] = loadImage("assets/enemie_" + e + ".png"); //carga de sprite honguito
  }
  
  fondo = loadImage("assets/fondo2.png");
}


function setup() {
createCanvas(800,600);
tiempoInicio = millis();
}


function draw() {
 
   for(let f = 0; f < 2; f++){
   image(fondo, posicionFondo + f * 800,0,800,600); //fondo continuo
 }
 
 
 
 dibujarMario(posX,posY);
 dibujarHongo(posicionEnemigo,445);
 
 if(estadoMario == "saltar"){
  
   if (subiendo == true){
   posY = posY - 2;
 if (posY <= 380){                           //control de salto
    subiendo = false;
} 
   } else {                    
   posY = posY + 2;
   
   if(posY >= 455){
     posY = 455;
     estadoMario = "caminar";                // vuelta a caminar
     subiendo  = true;
     enemigoSaltado = true;
   }
 }
   
 };
 
 
 if (frameCount % velocidad == 0){
   frameHongo = (frameHongo + 1) % 2;
 };
 posicionEnemigo = posicionEnemigo - 5; // avance del hongo hacia la izquierda
 
 if (enemigoCerca() && estadoMario == "caminar" && enemigoSaltado == false){    // control de salto a enemigo
   estadoMario = "saltar";
   
 };
 
 if(frameCount % velocidad == 0){
 frameActual = (frameActual + 1) % 3; //control de sucesion de sprites y velocidad de muestra
 };
 
 if(estadoMario != "fin"){
 
   posicionFondo = posicionFondo - 3;
   if(posicionFondo <= -800){
   posicionFondo = 0;
 }
 }; //control de fondo
  
  if(millis() - tiempoInicio >= duracion && estadoMario == "caminar"){
    estadoMario = "fin";
  };
  if(estadoMario == "fin"){
  posX = posX + 2;
    
  };
}

function keyPressed(){
    if (key == "r" ){
      reset();
    }
  };
