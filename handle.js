
const { parentPort } = require('worker_threads');
const ks = require('node-key-sender');
const { keyMap } = require('./map');
const { beatTime, factory } = require('./musicScore/index');

// 获取参数
const useGetParams = () => {
  let playedBeatTime = beatTime; // 用于记录中途节奏变更的节拍时长
  return ({ key, beat = 1, new_bpm }, stop) => {
    if (new_bpm) {
      // 重新编谱节奏（比如遇到flower dance这种中途节奏改变的）
      playedBeatTime = factory(new_bpm);
    }
    const waitMillisec = stop ? 0 : beat * playedBeatTime;
    if (typeof key === 'string') {
      return [[keyMap.get(key) || key], waitMillisec];
    } else if (Array.isArray(key)) {
      return [key.map((e) => keyMap.get(e)), waitMillisec];
    } else {
      return [key, waitMillisec];
    }
  }
}
// const getParams = useGetParams();


let playedBeatTime = beatTime;
const getParams = ({ key, beat = 1, new_bpm }, stop) => {
  if (new_bpm) {
    // 重新编谱节奏（比如遇到flower dance这种中途节奏改变的）
    playedBeatTime = factory(new_bpm);
  }
  const waitMillisec = stop ? 0 : beat * playedBeatTime;
  if (typeof key === 'string') {
    return [[keyMap.get(key) || key], waitMillisec];
  } else if (Array.isArray(key)) {
    return [key.map((e) => keyMap.get(e)), waitMillisec];
  } else {
    return [key, waitMillisec];
  }
}

const handle = async (melodyList = []) => {
  for (let i = 0; i < melodyList.length; i++) {
    const e = melodyList[i];
    if (i === 0) {
      ks.startBatch();
    }
    ks.batchTypeCombination(...getParams(e), ks.BATCH_EVENT_KEY_DOWN);
    ks.batchTypeCombination(...getParams(e, true), ks.BATCH_EVENT_KEY_UP);
    if (i === melodyList.length - 1) {
      ks.sendBatch().then(() => {
        parentPort.postMessage(Date.now());
      });
    }
    
  }
}

parentPort.on('message', ({ list }) => {
  handle(list);
});

module.exports = {
  handle,
}