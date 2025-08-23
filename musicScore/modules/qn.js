const { MusicScore } = require('../../map');
const musicScore = new MusicScore();

// 乐谱名称
musicScore.name = '青鸟';
// Beat Per Minute bpm 拍子数
musicScore.bpm = 140;
// 音乐谱
musicScore.ms = [
  { key: '0' },
  { key: '0' },
  { key: '0', beat: 0.5 },
  { key: '3', beat: 0.5 },
  { key: '6', beat: 0.5 },
  { key: '7', beat: 0.5 },
  /* --------------------- */
  { key: '1+', beat: 2 },
  { key: '7', beat: 1.5 },
  { key: '6', beat: 2.5 },
  /* --------------------- */
  { key: '0', beat: 0.5 },
  { key: '3', beat: 0.5 },
  { key: '6', beat: 0.5 },
  { key: '7', beat: 0.5 },
  /* --------------------- */
  { key: '1+', beat: 1.5 },
  { key: '1+', beat: 0.5 },
  { key: '2+' },
  { key: '1+', beat: 0.5 },
  { key: '2+', beat: 1 },
  /* --------------------- */
  { key: '3+', beat: 1.5 },
  { key: '0', beat: 0.5 },
  { key: '3', beat: 0.5 },
  { key: '6', beat: 0.5 },
  { key: '7', beat: 0.5 },
  /* --------------------- */
  { key: '1+', beat: 2 },
  { key: '7', beat: 1.5 },
  { key: '6', beat: 2.5 },
  /* --------------------- */
  { key: '0', beat: 0.5 },
  { key: '6', beat: 0.5 },
  { key: '3+', beat: 0.5 },
  { key: '2+', beat: 1 },
  /* --------------------- */
  { key: '6', beat: 0.5 },
  { key: '3+', beat: 0.5 },
  { key: '2+', beat: 1 },
  { key: '5' },
  { key: '5', beat: 1 },
  /* --------------------- */
  { key: '6', beat: 0.5 },
  { key: '6', beat: 3 },
  /* --------------------- */
];

module.exports = musicScore;