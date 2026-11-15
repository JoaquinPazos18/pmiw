class Obstaculo {
  constructor(){
   this.posiblesY = [45, 200, 340]; 
   this.posY = random(this.posiblesY);
   
   this.posX = random(-1500, -100);
   
   this.velocidad = 2.5;
   this.ancho = 50;
   this.alto = 60;
  }
 
 mover(){
    this.posX += this.velocidad; 
 }
 
 dibujar(){
    imageMode(CENTER);
    
   if(this.posY === 45){
      image(objeto1, this.posX, this.posY, this.ancho, this.alto);
    } else if(this.posY === 200){
      image(objeto2, this.posX, this.posY, this.ancho, this.alto);
    } else if(this.posY === 340){
      image(objeto3, this.posX, this.posY, this.ancho, this.alto);
    }
  }
  
 fueraDePantalla(){
    return this.posX > width + 50;
  }
}
