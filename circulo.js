class Circulo {
  constructor() {
    this.x = random(width);
    this.y = random(-200, -50);
    this.speed = random(2, 4);
    this.diameter = random(20, 40);
    this.color = color(random(255), random(255), random(255));
  }

  mover() {
    this.y += this.speed;
    if (this.y > height + this.diameter) {
      this.y = random(-200, -50);
      this.x = random(width);
    }
  }

  mostrar() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.diameter);
  }
}

class CirculoAbajo extends Circulo {
  constructor() {
    super();
    this.y = random(height, height + 950);
    this.speed *= -1;
  }
}
