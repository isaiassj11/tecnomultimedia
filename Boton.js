class Boton {
  constructor(x, y, ancho, alto, texto, pantallaDestino) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = texto;
    this.pantallaDestino = pantallaDestino;
  }

  mostrar() {
    fill(255);
    rect(this.x, this.y, this.ancho, this.alto);
    fill(0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(this.texto, this.x + this.ancho / 2, this.y + this.alto / 2);
  }

  clicEnBoton() {
    return mouseX > this.x && mouseX < this.x + this.ancho && mouseY > this.y && mouseY < this.y + this.alto;
  }
}
