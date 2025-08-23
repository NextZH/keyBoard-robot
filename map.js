const keyMap = new Map([
  ['0', 'space'],
  ['1--', 'z'],
  ['2--', 'x'],
  ['3--', 'c'],
  ['4--', 'v'],
  ['5--', 'b'],
  ['6--', 'n'],
  ['7--', 'm'],
  ['1-', 'a'],
  ['2-', 's'],
  ['3-', 'd'],
  ['4-', 'f'],
  ['5-', 'g'],
  ['6-', 'h'],
  ['7-', 'j'],
  ['1', 'q'],
  ['2', 'w'],
  ['3', 'e'],
  ['4', 'r'],
  ['5', 't'],
  ['6', 'y'],
  ['7', 'u'],
  ['1+', '1'],
  ['2+', '2'],
  ['3+', '3'],
  ['4+', '4'],
  ['5+', '5'],
  ['6+', '6'],
  ['7+', '7'],
  ['1++', '8'],
  ['2++', '9'],
  ['3++', '0'],
  // ['1#', '1'],
  // ['2#', '2'],
  // ['3#', '3'],
  // ['4#', '4'],
  // ['5#', '5'],
  // ['6#', '6'],
  // ['7#', '7'],
]);


/**
 * musicScore item
 * @param {String|Array<String>} key - 键位
 * @param {Number?} beat - 节拍 比率(默认1)
 * @param {Number?} new_bpm - 新拍子数 bpm(一分钟多少拍)
 * @description 单个音阶对象
 */
function MusicScoreItem(key, beat, new_bpm) {
  this.key = key;
  this.beat = beat || 1;
  this.new_bpm = new_bpm;
}
class MusicScore {
  /**
   * 音乐谱
   * @param {Array<MusicScoreItem>|Record<'main'|'vice',Array<MusicScoreItem>>} ms 音乐谱
   * @param {Number} bpm Beat Per Minute bpm 拍子数
   * @param {String?} name 谱名
   * @description 音乐谱
   */
  constructor(ms, bpm, name) {
    this.ms = ms;
    this.bpm = bpm;
    this.name = name;
  }
}
module.exports = {
  keyMap,
  MusicScore,
};