import { timeOfDay } from './greeting.js'

const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

let bgNum = getRandomNum(1, 20);

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setBg() {
  const bgImg = new Image();
  bgImg.src = `https://raw.githubusercontent.com/ain-odin/Images/main/assets/images/${timeOfDay}/${String(bgNum).padStart(2, '0')}.webp`;
  bgImg.onload = () => body.style.backgroundImage = `url(${bgImg.src})`;
}

function getSlideNext() {
  bgNum === 20 ? bgNum = 1 : bgNum += 1;
  setBg();
};

function getSlidePrev() {
  bgNum === 1 ? bgNum = 20 : bgNum -= 1;
  setBg();
};

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

export { setBg, getRandomNum }