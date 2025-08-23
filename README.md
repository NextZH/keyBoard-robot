# 一、项目结构介绍

```markdown
├──  img  // 存放乐谱文件夹
│ └──  yp-晴天.png  // 示例乐谱图片，可对照代码自己翻译乐谱为正确数据结构
├──  .gitignore
├──  handle.js  // 处理弹奏的业务逻辑文件
├──  index.js  // 入口文件，主线程、开始方法
├──  map.js  // 索引表文件，翻译乐谱音调为对应按键，根据需要自主添加
├──  musicScore.js  // 乐谱文件，将翻译过后的乐谱数据结构和节拍数据存放于此
├──  package-lock.json // 依赖锁文件，记录依赖版本，删掉也行
├──  package.json // 依赖包文件，记录依赖和指令
└──  README.md
```

# 二、使用方法

**以下内容针对没写过代码的或者对计算机完全一窍不通的计算机小白使用，老油条请按需阅读**

## 1.下载安装node.js（稳定版就行）

node.js官网：https://nodejs.org/zh-cn

验证是否安装成功：下载好了在cmd打开输入node -v（怎么打开看第2点），出现版本号表示安装成功，nodejs自带npm，这个时候你就能使用npm执行指令了

## 2.打开cmd，找到项目路径

- 下载该项目放到一个你能找到路径的位置，并复制项目路径

- 在电脑搜索栏搜索cmd，选择命令提示符，以管理员身份运行(一定要管理员身份运行，不然在其他软件上键盘事件不起作用)

- 如果项目没存放在c盘路径下，先输入指定盘符回车，再输入cd + 你刚刚复制的路径
```bash
C:\Windows\System32>E:
E:\>cd E:\vscode\qita\lianxi\keyBoard-robot
E:\vscode\qita\lianxi\keyBoard-robot>
```

## 3.启动脚本

- 然后执行npm install，下载脚本所需依赖

```bash
E:\vscode\qita\lianxi\keyBoard-robot>npm install
```

- 最后运行脚本npm start

```bash
E:\vscode\qita\lianxi\keyBoard-robot>npm start
```

**代码里设置了3秒倒计时，在这期间切屏到游戏即可，可根据自己需要在代码里修改时长**

## 4.翻译乐谱

musicScore.js文件中提供了示例乐谱晴天，可按照谱子翻译数据结构和配置拍子时长

```js
// test
const test_beatTime = 60;
const test = [
  { key: ['1', '2'], beat: 1 },
  { key: '3', beat: 0.5 },
]
```

test_beatTime：一分钟内拍子次数

key: 对应的音调，请对照map.js的索引表检查音调和按键是否对应正确

beat: 默认值1，表示一拍

# 三、项目介绍

## 1.作者★Next★

全网同id（b站，QQ，抖音，微信，贴吧）

开放空间游戏id：Next，uid：1637655

## 2.脚本用途

- 根据需求自己翻译乐谱，脚本执行演奏
- 当前版本（2025-8-16）只能弹一些单调的谱子，没法弹和弦，后续版本会更新



