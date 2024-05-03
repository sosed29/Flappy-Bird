export default class Score {
  constructor(ctx, canvas, scoreSound) {
    // Конструктор класса Score, принимает контекст рисования, холст и звук подсчета очков
    this.ctx = ctx; // Сохраняем контекст рисования
    this.canvas = canvas; // Сохраняем холст
    this.score = 0; // Инициализируем счет
    this.bestScore = localStorage.getItem("bestsScore") || 0; // Получаем лучший счет из локального хранилища или устанавливаем 0
    this.scoreSound = scoreSound; // Сохраняем звук подсчета очков
  }

  updateScore(pipes, bird) {
    // Метод для обновления счета
    for (let i = 0; i < pipes.pipes.length; i++) {
      // Проходим по всем трубам
      if (
        pipes.pipes[i].x + pipes.imageTop.width < bird.getX() &&
        !pipes.pipes[i].passed
      ) {
        this.score++; // Увеличиваем счет
        pipes.pipes[i].passed = true; // Помечаем трубу как пройденную
        this.scoreSound.play(); // Воспроизводим звук
      }
    }

    if (this.score > this.bestScore) {
      // Если текущий счет больше лучшего счета
      this.bestScore = this.score; // Обновляем лучший счет
      localStorage.setItem("bestsScore", this.bestScore); // Сохраняем лучший счет в локальное хранилище
    }
  }

  draw() {
    this.ctx.fillStyle = "orange"; // Устанавливаем цвет фона
    this.ctx.fillRect(0, 0, 90, 88); // Рисуем прямоугольник фона

    this.ctx.fillStyle = "red"; // Устанавливаем цвет текста
    this.ctx.font = "20px Arial"; // Устанавливаем шрифт

    this.ctx.fillText("Score", 20, 20); // Рисуем текст "Score"
    this.ctx.fillText("Best", 25, 60); // Рисуем текст "Best"

    this.ctx.fillStyle = "white"; // Устанавливаем цвет цифр
    this.ctx.strokeStyle = "black"; // Устанавливаем цвет бордера
    this.ctx.font = "25px Arial"; // Устанавливаем шрифт

    this.ctx.fillText("" + this.score, 40, 45); // Рисуем текущий счет
    this.ctx.fillText("" + this.bestScore, 40, 80); // Рисуем лучший счет
  }
}