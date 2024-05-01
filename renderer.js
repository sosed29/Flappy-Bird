export default class Renderer { // Объявление класса Renderer
  constructor(ctx) { // Конструктор класса, принимает объект контекста рисования (2D)
    this.ctx = ctx; // Сохранение контекста рисования в свойстве this.ctx
  }

  drawImage(image, x, y) { // Метод для отрисовки изображения на канвасе
    this.ctx.drawImage(image, x, y); // Использование метода drawImage контекста для отрисовки изображения
  }

  clearCanvas() { // Метод для очистки канваса
    this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height); // Очистка канваса с использованием метода clearRect
  }

  drawField(field) { // Метод для отрисовки поля
    this.drawImage(field.image, 0, 0, this.ctx.canvas.width, this.ctx.canvas.height); // Вызов метода drawImage для отрисовки изображения поля
  }

  drawFieldBottom(fieldBottom) { // Метод для отрисовки нижней части поля
    this.drawImage(fieldBottom.image, 0, 400, this.ctx.canvas.width, this.ctx.canvas.height); // Вызов метода drawImage для отрисовки изображения нижней части поля
  }

  drawScore(score) { // Метод для отрисовки счета
    score.draw(); // Вызов метода draw из объекта score для отрисовки счета
  }

  drawBird(bird) { // Метод для отрисовки птицы
    this.drawImage(bird.image, bird.x, bird.y); // Вызов метода drawImage для отрисовки изображения птицы
  }

 
}