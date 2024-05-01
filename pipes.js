import Renderer from "./renderer.js";
import { Images, GameSettings } from "./Config.js";

export default class Pipes {
  constructor(pipeUp, pipeBottom, x, pipeSpeed, ctx, canvas) {
    // Конструктор класса Pipes
    this.imageTop = new Image(); // Создаем новый объект изображения для верхней трубы
    this.imageTop.src = Images.pipeUp; // Устанавливаем источник изображения для верхней трубы из переменной Images.pipeUp
    this.imageBottom = new Image(); // Создаем новый объект изображения для нижней трубы
    this.imageBottom.src = Images.pipeBottom; // Устанавливаем источник изображения для нижней трубы из переменной Images.pipeBottom
    this.x = GameSettings.pipeX; // Устанавливаем начальное положение трубы на основе значения из GameSettings.pipeX
    this.speed = GameSettings.pipeSpeed; // Устанавливаем скорость движения трубы на основе значения из GameSettings.pipeSpeed
    this.ctx = ctx; // Сохраняем контекст для рисования
    this.canvas = canvas; // Сохраняем ссылку на canvas
    this.gap = GameSettings.pipeGap; // Устанавливаем промежуток между трубами на основе значения из GameSettings.pipeGap
    this.renderer = new Renderer(ctx); // Создаем новый объект Renderer с использованием контекста ctx

    this.pipes = [
      // Начальный массив объектов труб
      {
        x: this.canvas.width, // Начальное положение x для первой трубы устанавливается на ширину canvas
        y: 0, // Начальное положение y для первой трубы устанавливается в 0
      },
    ];
  }

  draw() {
    for (let i = 0; i < this.pipes.length; i++) {
      // отрисовка труб
      this.renderer.drawImage(this.imageTop, this.pipes[i].x, this.pipes[i].y); // Отрисовка верхней трубы
      this.renderer.drawImage(this.imageBottom,this.pipes[i].x,this.pipes[i].y + this.imageTop.height + this.gap);// Отрисовка нижней трубы

      this.pipes[i].x--;

      if (this.pipes[i].x == 125) { //  достигла ли текущая труба определенного положения x
        this.pipes.push({ // добавление новой трубы
          x: this.canvas.width + 110, // расстояние от трубы до трубы
          y:
            Math.floor(Math.random() * this.imageTop.height) - // рандом труб
            this.imageTop.height,
        });
      }
    }
  }

  update() {
    this.x -= this.speed; // Уменьшаем положение x для всех труб на величину скорости, чтобы они двигались влево
  }
}
