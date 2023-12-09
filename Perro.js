class Perro {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radio = 30;
    this.velocidad = 3;
    this.imagen = loadImage('data/imagenes/perro.png');
  }

  mover(velocidadPerros) {
    this.x -= velocidadPerros;
  }

 mostrar() {
    image(this.imagen, this.x - this.radio, this.y - this.radio, this.radio * 2, this.radio * 2);
}
}
