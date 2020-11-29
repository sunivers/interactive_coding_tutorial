import { WaveGroup } from './wavegroup.js';

class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    this.wavegroup = new WaveGroup();

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    // 레티나 디스플레이에서 잘 보이도록 캔버스 더블 사이즈 지정
    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);

    this.wavegroup.resize(this.stageWidth, this.stageHeight);
  }

  animate(t) {
    // 캔버스 클리어
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.wavegroup.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
}