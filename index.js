const { musicScore } = require('./musicScore');
const { handle } = require('./handle');

// 开始弹奏音乐
const playMusic = () => {
  if (Array.isArray(musicScore)) {
    handle(musicScore);
  } else {
    handle(musicScore.main);
    handle(musicScore.vice);
  }
}

// 启动倒计时
const start = (timeout = 3) => {
  const inner = (time) => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      if (time < 0) {
        playMusic();
      } else {
        console.log(time);
        time--;
        inner(time);
      }
    }, 1000);
  }
  inner(timeout);
};
start();
