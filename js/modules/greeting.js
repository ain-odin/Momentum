const greetingMessage = document.querySelector('.greeting');

const timeOfDay = getTimeOfDay();
const greetingText = `Good ${timeOfDay}, `;
const nameField = document.querySelector('.name');

function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  switch (hours) {
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      return 'morning';
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
      return 'afternoon';
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
      return 'evening';
    case 22:
    case 23:
    case 1:
    case 2:
    case 3:
    case 4:
      return 'night';
  }
};

function showGreeting() {
  greetingMessage.textContent = greetingText;
};

function setLocalStorage() {
  localStorage.setItem('userName', nameField.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  const nameFromLS = localStorage.getItem('userName');

  if (nameFromLS !== null) {
    nameField.value = nameFromLS;
  }
}

window.addEventListener('load', getLocalStorage);
nameField.addEventListener('click', setLocalStorage);

export { timeOfDay, getTimeOfDay, showGreeting }