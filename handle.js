
// const { parentPort } = require('worker_threads');
const ks = require('node-key-sender');
const { keyMap } = require('./map');
const { beatTime } = require('./musicScore');

// 获取参数
const getParams = (key, beat = 1) => {
  if (typeof key === 'string') {
    return [keyMap.get(key) || key, beat * beatTime];
  } else if (Array.isArray(key)) {
    return [key.map((e) => keyMap.get(e)), beat * beatTime];
  } else {
    return [key, beat * beatTime];
  }
}
const handle = async (melodyList, index, max) => {
  for (let i = 0; i < melodyList.length; i++) {
    const e = melodyList[i];
    if (i === 0) {
      ks.startBatch();
    }
    if (typeof e.key === 'string') {
      ks.batchTypeKey(...getParams(e.key, e.beat || 1));
    } else {
      ks.batchTypeCombination(...getParams(e.key, e.beat || 1));
    }
    if (i === melodyList.length - 1) {
      await ks.sendBatch().then(() => {
        // parentPort.postMessage(index);
      });
      if (index === max - 1) {
        console.log('演奏完毕！', Date.now());
      }
      return index;
    }
  }
}

// parentPort.on('message', ({ list, index, max }) => {
//   handle(list, index, max);
// });

module.exports = {
  handle,
}