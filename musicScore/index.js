const books = {
  qt: require('./modules/qt'),
  arcg: require('./modules/arcg'),
  komorebi: require('./modules/komorebi'),
  dbz: require('./modules/dbz'),
  qn: require('./modules/qn'),
  yq: require('./modules/yq'),
  cyskdsn: require('./modules/cyskdsn'),
  cyskdsn2: require('./modules/cyskdsn2'),
  flowerDance: require('./modules/flowerDance'),
  tmh: require('./modules/tmh'),
  summer: require('./modules/summer'),
};

/**
 * 请注意！
 * 请注意！
 * 请注意！
 * toFixed的参数用于控制精度
 * 值过小时会丢失精度,<6时弹奏和弦会明显精度丢失
 * 值过大时会导致node-key-sender的执行队列占满强行退出无法执行
 * 例如：晴天能接受toFixed的最大值为6
 * 其他歌曲请自行测试
 * 
 */
const factory = (e = 60) => Number((60 * 1000 / e).toFixed(6));

const currentSong = 'tmh'; // 需要弹那首歌就改这里的名字

module.exports = {
  musicScore: books[currentSong].ms,
  beatTime: (factory)(books[currentSong].bpm), // 拍子间隔 拍子持续时长
  songName: books[currentSong].name,
  factory,
};