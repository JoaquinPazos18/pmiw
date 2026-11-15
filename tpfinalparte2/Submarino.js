class Submarino {
  constructor(){
    this.posX = 80;       
    this.posY = 330;    
    this.ancho = 100;
    this.alto = 120;
  }

  dibujar(){
    noStroke();
    image(submarino, this.posX, this.posY, this.ancho, this.alto);
  }
}
