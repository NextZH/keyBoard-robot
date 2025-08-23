const { musicScore, songName } = require('./musicScore/index');
const { Worker } = require('worker_threads');

// 退出脚本
const exit = (flag) => {
  if (flag.every(v => v)) {
    process.exit();
  }
}
let worker = {}; // 弹奏线程
// 开始弹奏音乐
const playMusic = () => {
  if (Array.isArray(musicScore)) {
    worker = new Worker('./handle.js');
    worker.postMessage({ list: musicScore });
    worker.on('message', () => {
      worker.terminate();
      worker.on('exit', () => {
        console.log('演奏完毕！', Date.now());
        exit([true]);
      })
    })
  } else {
    const flag = [];
    worker = {};
    let index = 0;
    for (const key in musicScore) {
      if (Object.prototype.hasOwnProperty.call(musicScore, key)) {
        worker[key] = new Worker('./handle.js');
        flag.push(false);
        worker[key].postMessage({ list: musicScore[key] });
        worker[key].on('message', (time) => {
          worker[key].terminate();
          flag[index] = true;
          index += 1;
          console.log(`${key}-演奏完毕！`, time, Date.now());
          exit(flag);
        })
      }
    }
  }
}

// 启动倒计时
const start = (timeout = 3) => {
  const inner = (time) => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      if (time === 0) {
        playMusic();
      } else {
        console.log(time);
        time--;
        inner(time);
      }
    }, 1000);
  }
  songName && console.log(`即将演奏音乐：${songName}`);
  inner(timeout);
};
start();
