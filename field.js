export default class Field {
  constructor(imageSrc, ctx, canvas) {
    this.image = new Image();
    this.image.src = imageSrc;
    this.ctx = ctx;
    this.canvas = canvas;
  }
}



