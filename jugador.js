class Jugador {
  constructor() {
    this.x = 50;
    this.y = height / 2;
    this.radio = 20;
    this.monedasRecogidas = 0;
    this.velocidad = 5; // Velocidad de movimiento del jugador
  }

  mover() {
    // Movimiento hacia arriba con la flecha arriba
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.velocidad;
    }

    // Movimiento hacia abajo con la flecha abajo
    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.velocidad;
    }

    // Limitar la posición del jugador para que no salga de la pantalla
    this.y = constrain(this.y, this.radio, height - this.radio);
  }

  mostrar() {
    fill(0, 0, 255); // Azul
    ellipse(this.x, this.y, this.radio * 2);
  }

  recogerMoneda() {
    this.monedasRecogidas++;
  }
}
