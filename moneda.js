class Moneda {
  constructor() {
    this.x = width; // Comienzan desde el lado derecho de la pantalla
    this.y = random(height); // Posición vertical aleatoria
    this.radio = 16; // Radio de la moneda
    this.velocidadX = random(2, 6); // Velocidad horizontal aleatoria
    this.recogida = false; // Indica si la moneda ha sido recogida
    this.imagen = loadImage('data/imagenes/moneda.png');

  }

  mover() {
    this.x -= this.velocidadX; // Mover hacia la izquierda

    // Verifica si la moneda ha llegado al jugador
    if (!this.recogida && dist(this.x, this.y, juego.jugador.x, juego.jugador.y) < this.radio + juego.jugador.radio) {
      this.recogida = true;
      // Incrementa un contador de monedas recogidas
      juego.jugador.monedasRecogidas++;

      // Elimina la moneda del array cuando es recogida
      let index = juego.monedas.indexOf(this);
      if (index !== -1) {
        juego.monedas.splice(index, 1);
      }
    }
  }
  
  recoger() {
    this.recogida = true;
  }

mostrar() {
  if (!this.recogida) {
      image(this.imagen, this.x - this.radio, this.y - this.radio, this.radio * 2, this.radio * 2);
  }
}
  }
