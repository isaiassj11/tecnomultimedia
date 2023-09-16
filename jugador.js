class CirculoJugador {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.diameter = 40;
    this.color = color(255, 0, 0);
    this.strokeColor = color(0, 255, 0);
    this.strokeWeight = 2;
  }

  actualizarPosicion() {
    this.x = mouseX;
    this.y = mouseY;
  }

  mostrar() {
    fill(this.color);
    stroke(this.strokeColor);
    strokeWeight(this.strokeWeight);
    ellipse(this.x, this.y, this.diameter);
  }
}
