const output = document.querySelector("output");
const body = document.querySelector("body");
const numColors = 8;
const numTiming = 5;
const numTops = 3;
let amount = 0;

function createBubble(time, text) {
  const left = Math.floor(Math.random() * 65);
  const aside = document.createElement("aside");
  aside.style.left = `${left + 5}vw`;
  aside.className = `color${Math.floor(Math.random() * numColors)} time${Math.floor(Math.random() * numTiming)} top${Math.floor(Math.random() * numTops)}`;
  aside.innerHTML = `<b>${time} seconds</b>:<br>${text}`;
  body.append(aside);
}

const bubbles = [
  { time: 4, text: "变成了煞笔。。。" },
  { time: 9, text: "越来越煞笔。。。" },
  { time: 13, text: "特别的煞笔" },
  { time: 18, text: "太tm煞笔" },
  { time: 23, text: "嘎嘎傻逼！" },
  { time: 28, text: "嘎嘎嘎煞笔！" },
  { time: 32, text: "嘎嘎嘎嘎嘎嘎嘎煞笔！" },
  { time: 38, text: "已经煞笔极了" },
  { time: 48, text: "傻逼完全体" },
  { time: 55, text: "傻逼究极化" },
  /*{ time: 70, text: "enough to raise a child from birth to age 17" },
  { time: 80, text: "enough to buy a house for the median price in the USA" },
  { time: 89, text: "more than the yearly salary of 99% of the US population" },
  { time: 111, text: "more than what the US President makes in a year" },*/
  { time: 277, text: "足以支付有史以来最昂贵的钓鱼诱惑" }
]

bubbles.forEach(function (el) {
  setTimeout(`createBubble(${el.time}, "${el.text}")`, el.time * 1000);
});