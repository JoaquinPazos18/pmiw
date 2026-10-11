//La animación del inicio va a ir acá.

function Animacion(){

  if (fase === 1){
   image(Fondo, 0, fondoY, 800,Fondo.height * (800 / Fondo.width));
   fill(255);
   textSize(25);
   textAlign(CENTER,CENTER);
   text("Integrantes: María Wusinowski y Joaquín Pazos",400,100);
   text("Viaje submarino - Paul Granger",400,300);
   text("Elige tu propia aventura",400,350);

   if (tiempoActual >= 160){
   fase = 2;
   }
  }

  if (fase === 2){
  image(Fondo, 0, fondoY, 800,Fondo.height * (800 / Fondo.width));
   fondoY -= 1.0;

   if (fondoY <= -500){
     fondoY = -500;
     fase = 3;
    }

   }

  if (fase === 3){
    image(Fondo, 0, fondoY, 800,Fondo.height * (800 / Fondo.width));
    
    if (fondoY === -500) {
      opacidad += 3;
    } else {
      fase = 5; 
    }

    fill(0, opacidad);
    rect(0, 0, 800, 450);

  }

}
