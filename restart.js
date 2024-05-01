export default class Restart {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.restartButton = document.createElement("button");
    this.restartButton.textContent = "Restart";
    this.restartButton.className = "restart-button";
    this.restartButton.style.color = "red"
    this.restartButton.style.position = "absolute";
    this.restartButton.style.top = "50%";
    this.restartButton.style.left = "50%";
    this.restartButton.style.transform = "translate(-50%, -50%)";
    this.restartButton.style.left = "50%";
    this.restartButton.style.fontSize = "24px";
    this.restartButton.style.padding = "10px 20px";
    this.restartButton.style.backgroundColor = "orange";
    this.restartButton.style.border = "none";
    this.restartButton.style.borderRadius = "5px";
    this.restartButton.cursor = "pointer";
    this.restartButton.style.display = "none";
    document.body.appendChild(this.restartButton);

    this.restartButton.addEventListener("click", () => {
      window.location.reload();
    });
  }

  showRestartButton() {
    this.restartButton.style.display = "block";
  }
}