export default class logicBird {
    constructor(gravity) {
      this.gravity = gravity;
    }
  
    updatePosition(bird) {
        bird.y += this.gravity / 2; // Обновление положения птицы с учетом гравитации

    }
  }