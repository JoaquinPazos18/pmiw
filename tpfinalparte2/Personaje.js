class Personaje {
  constructor(){
    this.vida = 3;
    this.posX = 100;
    this.posY = 200;
    this.velocidad = 4;
    this.direccion = "quieto";
  }
  
  dibujar(){
  imageMode(CORNER);
  
  if(this.direccion === "arriba"){
      image(buzo2, this.posX, this.posY, 40, 60); 
    } else if(this.direccion === "abajo"){
      image(buzo3, this.posX, this.posY, 40, 60); 
    } else if(this.direccion === "izquierda"){
      image(buzo5, this.posX, this.posY, 40, 60); 
    } else if(this.direccion === "derecha"){
      image(buzo4, this.posX, this.posY, 40, 60); 
    } else {
      image(buzo1, this.posX, this.posY, 40, 60); // Todo acá son los sprites del buzo. ARRIBA, ABAJO, IDLE, IZQUIERDA, DERECHA
    }
   }
  
  
  mover(){
    this.direccion = "quieto";
    
   //Mueve arriba
  if(keyIsDown(87)){
    this.posY -= this.velocidad;
    this.direccion = "arriba";
  }
  //Mueve izquierda
  if(keyIsDown(65)){
    this.posX -= this.velocidad;
    this.direccion = "izquierda";
  }
  //Mueve derecha
  if(keyIsDown(68)){
    this.posX += this.velocidad;
    this.direccion = "derecha";
  }
  
  //Mueve abajo
  if(keyIsDown(83)){
    this.posY += this.velocidad;
    this.direccion = "abajo";
    
  }
  
  //Limita movimiento en pantalla
  this.posX = constrain(this.posX, 0, width -40);
  this.posY = constrain(this.posY, 0, height -60);
  }
  
  estaVivo(){
    return this.vida > 0;
  }
}
