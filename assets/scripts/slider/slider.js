export default class Slider {
  constructor({elements, animationFn}) {
    this.elements = elements;
    this.animationFn = animationFn;

    this.index = 0;
    this.size = elements.length;

    this.prev = this.prev.bind(this);
    this.stop = this.stop.bind(this);
  }

  next() {
    this.index++;
    if(this.index >= this.size) this.index = 0;
  }
  prev() {
    this.index--;
    if(this.index < 0) this.index = this.size -1;
  }
  play() {
    this.interval = setInterval(this.prev, 5000);
  }
  stop() {
    clearInterval(this.interval);
  }
}
