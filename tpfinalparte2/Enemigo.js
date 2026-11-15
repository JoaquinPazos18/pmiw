class Enemigo {
 constructor(){
   this.posX = 720;
   this.posiblesPosicionesY = [120,190,270];
   this.posY = this.posiblesPosicionesY[1];
   
   this.contadorDisparos = 0;
   this.disparosParaCambiar = 4;
   }
 
 cambiarPosicion(){
   let indiceAleatorio = floor(random(this.posiblesPosicionesY.length));
   this.posY = this.posiblesPosicionesY[indiceAleatorio];
 }
 
 dibujar(){
  imageMode(CENTER);
  
  // El pulpo tiene diferentes imagenes según su posición
  if(this.posY === 120){
      image(enemigo1, this.posX, this.posY, 140, 170);
    } else if(this.posY === 190){
      image(enemigo2, this.posX, this.posY, 140, 170);
    } else if(this.posY === 270){
      image(enemigo3, this.posX, this.posY, 140, 170);
    }
 }
}
