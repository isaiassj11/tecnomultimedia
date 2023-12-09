class Juego {
  constructor(aventura) {
    this.jugador = new Jugador();
    this.perros = [];
    this.vidas = 3;
    this.tiempoLimite = 120;
    this.tiempoRestante = this.tiempoLimite;
    this.monedasRecogidas = 0;
    this.monedas = [];
    this.aventura = aventura;
    this.fondo = loadImage('data/imagenes/fondo.png');
    this.iniciarTemporizador();
    this.crearPerros();
    this.crearMonedas();
  }

  iniciarTemporizador() {
    setInterval(() => {
      if (this.tiempoRestante > 0) {
        this.tiempoRestante--;
        this.actualizar(); // Actualizamos en cada iteración del temporizador
      } else {
        this.finalizarJuego();
      }
    }, 1000);
  }

  crearPerros() {
    setInterval(() => {
      const cantidadPerros = floor(random(1, 4));
      for (let i = 0; i < cantidadPerros; i++) {
        const velocidadPerro = random(1, 5);
        this.perros.push(new Perro(width, random(height), velocidadPerro));
      }
    }, 5000);
  }

  crearMonedas() {
    setInterval(() => {
      const cantidadMonedas = floor(random(1, 7));
      for (let i = 0; i < cantidadMonedas; i++) {
        this.monedas.push(new Moneda());
      }
    }, 4000);
  }

verificarGanaste() {
    if (this.jugador.monedasRecogidas >= 20) {
      // Cambiar a la pantalla de "ganaste"
      aventura.pantallaActual = 16; // Índice de la pantalla de "ganaste"
    } else {
      this.verificarPerdiste();
    }
  }

  verificarPerdiste() {
    if (this.vidas <= 0 || this.tiempoRestante <= 0) {
      this.mostrarPerdiste();
    }
  }

  mostrar() {
    // Dibujar la imagen de fondo
    image(this.fondo, 0, 0, width, height);

    this.jugador.mostrar();

    // Muestra las monedas
    for (let moneda of this.monedas) {
      moneda.mostrar();
    }

    // Muestra los perros
    for (let perro of this.perros) {
      perro.mostrar();
    }

    //temporizador
    fill(0);
    textSize(16);
    textAlign(LEFT, CENTER);
    text(`Tiempo: ${nf(this.tiempoRestante, 2)}s`, 10, 25);

    // contador de vidas
    text(`Vidas: ${this.vidas}`, 10, 50);

    // contador de monedas
    text(`Monedas: ${this.jugador.monedasRecogidas}`, 10, 75);

    // Agrega un botón para volver a la pantalla inicial
    fill(255);
    rect(width - 100, 10, 80, 30);
    fill(0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text("Volver", width - 60, 25);
  }

  perroAtrapado() {
    this.vidas--;

    if (this.vidas <= 0) {
      this.mostrarPerdiste();
    } else {
      this.reiniciarPosiciones();
    }
  }

  reiniciarPosiciones() {
    this.jugador.x = 50;
    this.jugador.y = height / 2;

    // Reinicia la posición de los perros
    for (let perro of this.perros) {
      perro.x = width;
      perro.y = random(height);
    }
  }

  mostrarPerdiste() {
    aventura.pantallaActual = 15; // Índice de la pantalla de "Perdiste"
  }
  
  hasGanado() {
    return this.jugador.monedasRecogidas >= 20;
  }


  actualizar() {
    this.jugador.mover();
    this.verificarGanaste(); 

    for (let moneda of this.monedas) {
      moneda.mover();

      // Verifica colisión con el jugador
      if (!moneda.recogida && dist(moneda.x, moneda.y, this.jugador.x, this.jugador.y) < moneda.radio + this.jugador.radio) {
        this.jugador.recogerMoneda();
        moneda.recoger();
        this.monedasRecogidas++;

        this.verificarGanaste(); // Nueva línea para verificar si se han recogido 20 monedas
        aventura.verificarTransicion(); // Llama a la función en la clase Aventura
      }
    }

    // Actualiza los perros
    for (let perro of this.perros) {
      perro.mover(2);

      // Verifica colisión con el jugador
      if (dist(perro.x, perro.y, this.jugador.x, this.jugador.y) < perro.radio + this.jugador.radio) {
        this.perroAtrapado();
      }
    }

    // Verificar si el jugador ha perdido
    this.verificarPerdiste();
  }
}
