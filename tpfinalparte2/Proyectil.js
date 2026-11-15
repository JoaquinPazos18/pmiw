class Proyectil {
  constructor(posX,posY){
    this.posX = posX;
    this.posY = posY;
    this.velocidad = 6;
  }
  
  dibujar(){
   imageMode(CENTER);
   
   image(proyectil,this.posX,this.posY,60,60);
  }
  
  mover(){
  this.posX -= this.velocidad;
  }
  
  fueraDePantalla(){
    return this.posX < -30;
  }
}
