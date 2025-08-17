const { musicScore } = require('./musicScore');
const { handle } = require('./handle');
// const { Worker } = require('worker_threads');

// const asyncHandle = (worker) => {
//   return new Promise(resolve => {
//     worker.on('message', (result) => {
//       resolve(result);
//     });
//   })
// };
const factory = (item) => musicScore[item].reduce((list, item) => {
  // console.log('list',list);
  if (item.isSection) {
    list.push([item]);
  } else {
    list[list.length - 1].push(item);
  }
  return list;
}, []);
const main_list = factory('main');
const vice_list = factory('vice');
// const worker1 = new Worker('./handle.js');
// const worker2 = new Worker('./handle.js');
const dfs = (index = 0) => {
  const arr = [];
  if (main_list[index]) {
    // worker1.postMessage({
    //   list: main_list[index],
    //   max: main_list.length,
    //   index
    // });
    // arr.push(asyncHandle(worker1));
    arr.push(handle(main_list[index], index, main_list.length));
  }
  if (vice_list[index]) {
    // worker2.postMessage({
    //   list: vice_list[index],
    //   max: vice_list.length,
    //   index
    // });
    // arr.push(asyncHandle(worker2));
    arr.push(handle(vice_list[index], index, vice_list.length));
  }
  if (arr.length> 0) {
    // console.log(index,'通信开始：', Date.now());
    Promise.all(arr).then(() => {
      // console.log(index,'通信结束：', Date.now());
      dfs(index + 1);
    });
  }
}

// 开始弹奏音乐
const playMusic = () => {
  if (Array.isArray(musicScore)) {
    // const worker = new Worker('./handle.js');
    // worker.postMessage(musicScore);
    handle(musicScore);
  } else {
    // worker1.postMessage(musicScore.main);
    // worker2.postMessage(musicScore.vice);
    // dfs();
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
