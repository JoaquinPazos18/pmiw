//Todo todito acá carga la info y animaciones, no lo toques por las dudas

function Precarga(){
  Propuesta = loadImage("data/La-propuesta.png");
  Malo = loadImage("data/Final-malo.png");
  Neutral = loadImage("data/Final-neutral.png");
  Bueno = loadImage("data/Final-bueno.png");
  Maray = loadImage("data/Unido-al-maray.png");
  Abandonar = loadImage("data/Abandona-seeker-y-tiburon.png");
  Calamar = loadImage("data/Calamar-gigante.png");
  Cofres = loadImage("data/Carga-de-cofres.png");
  ExplorarCueva = loadImage("data/Explora-cueva.png");
  DejasMaray = loadImage("data/Suelta-seeker-del-maray.png");
  Traicion = loadImage("data/Te-empujan-del-barco.png");
  Vuelta = loadImage("data/Vuelta-a-maray-y-fama.png");
  Fondo = loadImage("data/Fondo.png");
  
}

//Inicia el juego
function Boton(){ 
  stroke(0);
  fill(valor);
  circle(botonposX,botonposY,80);
}
