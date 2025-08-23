const { MusicScore } = require('../../map');
const musicScore = new MusicScore();

// 乐谱名称
musicScore.name = '爱人错过';
// Beat Per Minute bpm 拍子数
musicScore.bpm = 120;
// 音乐谱
musicScore.ms = [
  { key: "3" },
  { key: "6-", beat: 0.5 },
  { key: "1", beat: 1.5 },
  { key: "0", beat: 0.5 },
  { key: "4-", beat: 0.5 },
  { key: "4" },
  { key: "3", beat: 0.5 },
  { key: "2" },
  { key: "3" },
  { key: "3" },
  { key: "7-", beat: 0.5 },
  { key: "7-" },
  { key: "1" },
  { key: "7-", beat: 3.5 },
  { key: "3-", beat: 0.5 },
  { key: "3-", beat: 0.5 },
  { key: "7-" },
  { key: "1", beat: 0.5 },
  { key: "7-", beat: 1.5 },
  { key: "0", beat: 4 },
  { key: "3-", beat: 0.5 },
  { key: "3-", beat: 0.5 },
  { key: "1", beat: 3 },
  { key: "7-", beat: 0.5 },
  { key: "6-", beat: 4.5 },
  { key: "3" },
  { key: "6-", beat: 0.5 },
  { key: "1", beat: 1.5 },
  { key: "0", beat: 0.5 },
  { key: "5-", beat: 0.5 },
  { key: "5-" },
  { key: "3", beat: 0.5 },
  { key: "2" },
  { key: "3" },
  { key: "5" },
  { key: "7-", beat: 0.5 },
  { key: "7-" },
  { key: "1" },
  { key: "7-", beat: 3.5 },
  { key: "3-", beat: 0.5 },
  { key: "3-", beat: 0.5 },
  { key: "7-" },
  { key: "1", beat: 0.5 },
  { key: "7-", beat: 1.5 },
  { key: "0", beat: 4 },
  { key: "3-", beat: 0.5 },
  { key: "3-", beat: 0.5 },
  { key: "1", beat: 3 },
  { key: "7-", beat: 0.5 },
  { key: "6-", beat: 4.5 },
];

module.exports = musicScore;