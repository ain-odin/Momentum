const time = document.querySelector('.time');
const day = document.querySelector('.date');

export function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();

  time.textContent = currentTime;

  showDate();
  setTimeout(showTime, 1000);
}
showTime();

function showDate() {
  const date = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' };
  const currentDate = date.toLocaleDateString('en-Br', options);

  day.textContent = currentDate;
}
