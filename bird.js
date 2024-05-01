import logicBird from "./logicBird.js"; // Импортируем класс logicBird из файла logicBird.js
import renderer from "./renderer.js"; // Импортируем классrenderer из файла renderer.js
import { Images, GameSettings } from "./Config.js"; // Импортируем константы из файла Config.js

export default class Bird { // Определяем класс Bird, который будет экспортироваться по умолчанию
  constructor(bird, birdX, birdY, gravity, ctx, pipes, score,restart, FlapDeath) {
    this.image = new Image(); // Создаем новый объект изображения
    this.image.src = Images.bird; // Устанавливаем источник изображения (из константы Images.bird)
    this.x = GameSettings.birdX; // Устаем координату x для птицы (из константы GameSettings.birdX)
    this.y = GameSettings.birdY; // Устанавливаем координату y для птицы (из константы GameSettings.birdY)
    this.gravity = GameSettings.birdGravity; // Устанавливаем гравитацию для птицы (из константы GameSettings.birdGravity)
    this.ctx = ctx; // Сохраняем контекст отрисовки (ctx)
    this.pipes = pipes; // Сохраняем объект pipes как свойство
    this.score = score; // Сохраняем объект score как свойство
    this.restart = restart
    this.hasCollided = false; // Добавляем флаг для отслеживания столкновения
    this.FlapDeath = FlapDeath
    this.logicBird = new logicBird(gravity) // Создаем объект logicBird с переданной гравитацией
    this.Renderer = new renderer(ctx) // Создаем объект Renderer с переданным контекстом отрисовки
  }

  draw() {
    this.Renderer.drawImage(this.image, this.x, this.y); // Отрисовываем изображение птицы на канвасе

    for (let i = 0; i < this.pipes.pipes.length; i++) {
      // Проверка на столкновение птицы с трубой
      if (
        this.x + this.image.width >= this.pipes.pipes[i].x &&
        this.x <= this.pipes.pipes[i].x + this.pipes.imageTop.width &&
        (this.y <= this.pipes.pipes[i].y + this.pipes.imageTop.height ||
          this.y + this.image.height >=
            this.pipes.pipes[i].y + this.pipes.imageTop.height + this.pipes.gap)
      ) {
        // Столкновение произошло, перезагрузите страницу
        this.restart.showRestartButton(); // Вызываем метод showRestartButton из объекта restart
        this.hasCollided = true; // Меняем флаг на true, чтобы показать, что произошло столкновение
        this.FlapDeath.play() // Воспроизводим звук столкновения
      }
      // Проверяем, прошла ли птица трубу
      if (
        this.x > this.pipes.pipes[i].x + this.pipes.imageTop.width &&
        !this.pipes.pipes[i].passed
      ) {
        this.score.updateScore(this.pipes, this); // Увеличит при прохождении трубы
       
        this.pipes.pipes[i].passed = true;//мечаем трубу как пройденную

      }
    }
  }

  moveUp() {
    this.y -= 35; // Движение птицы вверх на 35 пикселей
  }

  update() {
    if (!this.hasCollided) {
      this.logicBird.updatePosition(this); // Вызываем метод updatePosition из класса logicBird для обновления позиции птицы
    }
  }

  getX() {
    return this.x; // Возвращаем текущую координату x птицы
  }
}