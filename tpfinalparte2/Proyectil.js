
class Proyectil {
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.velocidad = 7;
    this.Color = color(100, 220, 255);
  }

  dibujar(){
    fill(this.Color);
    ellipse(this.posX, this.posY, 15, 15);
  }

  mover(){
    this.posX += this.velocidad;
  }

  fueraDePantalla(){
    return this.posX > width + 15;
  }
}
