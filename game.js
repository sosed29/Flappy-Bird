import Field from "./field.js"; // Импортируем класс Field
import Bird from "./bird.js"; // Импортируем класс Bird
import Pipes from "./pipes.js"; // Импортируем класс Pipes
import FieldBottom from "./fieldBottom.js"; // Импортируем класс FieldBottom
import Score from "./score.js"; // Импортируем класс Score
import Control from "./control.js"; // Импортируем класс Control
import Restart from "./restart.js"; // Импортируем класс Restart
import Renderer from "./renderer.js"; // Импортируем класс Renderer
import { Images, Sounds, GameSettings } from "./Config.js"; // Импортируем константы из файла Config.js

const canvas = document.getElementById("canvas"); // Получаем элемент canvas по его id
const ctx = canvas.getContext("2d"); // Получаем контекст рисования 2D для canvas
const field = new Field(Images.field, ctx, canvas); // Создаем объект класса Field
const pipes = new Pipes(Images.pipeUp,Images.pipeBottom,GameSettings.birdX,GameSettings.pipeSpeed,ctx,canvas); // Создаем объект класса Pipes
const flapSound = new Audio(Sounds.flap); // Создаем объект Audio для звука маха крыльями
const scoreSound = new Audio(Sounds.score); // Создаем объект Audio для звука набора очков
const FlapDeath = new Audio(Sounds.death); // Создаем объект Audio для звука смерти птицы
const score = new Score(ctx, canvas, scoreSound); // Создаем объект класса Score

const restart = new Restart(canvas); // Создаем объект класса Restart
const fieldBottom = new FieldBottom(Images.fieldBottom,ctx,canvas,restart,FlapDeath); 
const bird = new Bird(Images.bird,GameSettings.birdX,GameSettings.birdY,GameSettings.birdGravity,ctx,pipes,score,restart,FlapDeath); 
const control = new Control(bird, flapSound); // Создаем объект класса Control
const renderer = new Renderer(ctx, canvas); // Создаем объект класса Renderer

function draw() {
  if (!fieldBottom.hasCollided && !bird.hasCollided) {
    renderer.clearCanvas(); // Очищаем canvas перед отрисовкой
    renderer.drawField(field); // Отрисовываем фон
    renderer.drawScore(score); // Отрисовываем счет
    pipes.draw(); // Отрисовываем трубы
    renderer.drawFieldBottom(fieldBottom); // Отрисовываем поле снизу
    renderer.drawBird(bird); // Отрисовываем птицу

    bird.draw();
    bird.update(); // Обновляем положение птицы
    pipes.update(); // Обновляем положение труб

    pipes.update(bird);
    fieldBottom.checkCollision(bird); // Проверяем столкновение с полем снизу
    score.updateScore(pipes, bird); // Обновляем счет

    score.draw(); // Отрисовываем обновленный счет

    requestAnimationFrame(draw); // Запрашиваем следующий кадр анимации
  }
}

field.image.onload = function () {
  canvas.width = field.image.width; // Устанавливаем ширину canvas равную ширине изображения поля
  canvas.height = field.image.height; // Устанавливаем высоту canvas равную высожения поля
  draw(); // Запускаем функцию отрисовки
};

bird.image.onload = function () {
  canvas.width = field.image.width; // Устанавливаем ширину canvas равную ширине изображения поля
  canvas.height = field.image.height; // Устанавливаем высоту canvas равную Вы изображения поля
  draw(); // Запускаем функцию отрисовки
};

fieldBottom.image.onload = function () {
  canvas.width = field.image.width; // Устанавливаем ширину canvas равную ширине изображения поля
};
