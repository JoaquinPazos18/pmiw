let objJuego;
let fondoMarino;

function preload(){
  fondoMarino = loadImage("assets/fondo-marino.png");
}

function setup() {
 createCanvas(800,400);
 objJuego = new Juego();

}


function draw() {
 objJuego.dibujar();
}

function keyPressed(){

  // Disparar con la barra espaciadora
  if(keyCode === 32 && objJuego.estado === "jugando"){
    objJuego.crearProyectil();
  }

  // Reiniciar con la tecla R
  if(keyCode === 82 && objJuego.estado !== "jugando"){
    objJuego.reiniciar();
  }
}
