export default class Control {
  constructor(bird, flapSound) {
    document.addEventListener("keydown", (event) => {
        if (event.code === "Space") {
          bird.moveUp();
          flapSound.play(); // Сыграть звук при нажатии на пробел
        }
      });
      document.addEventListener("click", (event) => {
        bird.moveUp();
        flapSound.play(); // Сыграть звук при клике мышкой
      });
  }
}
  