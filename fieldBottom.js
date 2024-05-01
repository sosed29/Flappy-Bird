export default class FieldBottom {
  constructor(imageSrc, ctx, canvas, restart, FlapDeath) {
    this.image = new Image(); // Создаем новое изображение с указанным источником
    this.image.src = imageSrc;
    this.ctx = ctx; // Сохраняем контекст канваса
    this.canvas = canvas; // Сохраняем сам канвас
    this.restart = restart; // Сохраняем объект перезапуска игры
    this.FlapDeath = FlapDeath; // Сохраняем звук столкновения
  }

  // Метод для проверки столкновения птицы с нижней частью поля
  checkCollision(bird) {
    if (
      bird.x + bird.image.width >= 0 && // Проверка, что птица не выходит за левую границу канваса
      bird.x <= this.canvas.width && // Проверка, что птица не выходит за правую границу канваса
      bird.y + bird.image.height >= this.canvas.height - this.image.height // Проверка, что птица касается нижней части поля
    ) {
      this.restart.showRestartButton(); // Если столкновение произошло, вызываем метод для отображения кнопки перезапуска

      this.hasCollided = true; // Устанавливаем флаг столкновения в true

      this.FlapDeath.play(); // Воспроизводим звук столкновения
    }
  }
}
