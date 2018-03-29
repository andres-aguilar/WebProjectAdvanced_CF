export default class Slider {
  constructor({elements, animationFn, speed}) {
    this.elements = elements;
    this.animationFn = animationFn;

    this.index = 0;
    this.size = elements.length;

    this.speed = speed;

    this.prev = this.prev.bind(this);
    this.stop = this.stop.bind(this);
  }

  next() {
    this.index++;
    if(this.index >= this.size) this.index = 0;

    this.animationFn(this.elements[this.index]);
  }
  prev() {
    this.index--;
    if(this.index < 0) this.index = this.size -1;

    this.animationFn(this.elements[this.index]);
  }
  play() {
    this.interval = setInterval(this.prev, this.speed);
  }
  stop() {
    clearInterval(this.interval);
  }
}
