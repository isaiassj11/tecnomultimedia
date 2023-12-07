class Jugador {
  constructor() {
    this.x = 50;
    this.y = height / 2;
    this.radio = 20;
    this.monedasRecogidas = 0;
    this.velocidad = 5;
    this.imagen = loadImage('data/imagenes/gato.png');
  }

  mover() {
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.velocidad;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.velocidad;
    }

    // Limitar la posición del jugador para que no salga de la pantalla
    this.y = constrain(this.y, this.radio, height - this.radio);
  }

mostrar() {
      image(this.imagen, this.x - this.radio, this.y - this.radio, this.radio * 2, this.radio * 2);
}
 recogerMoneda() {
    this.monedasRecogidas++;
  }
}
