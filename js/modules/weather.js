const weatherIcon = document.querySelector('.weather-icon');
const weatherError = document.querySelector('.weather-error');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

const cityField = document.querySelector('.city');
const cityFromLS = localStorage.getItem('city');
cityFromLS === null ? cityField.value = 'Minsk' : cityField.value = cityFromLS;

function setLocalStorage() {
  localStorage.setItem('city', cityField.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (cityFromLS !== null) {
    cityField.value = cityFromLS;
  }
}

window.addEventListener('load', getLocalStorage);
cityField.addEventListener('change', setLocalStorage);

export async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityField.value}&lang=en&appid=8e16092286a0614cfa56a175c66033e6&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 

  try {
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    weatherError.textContent = '';
    temperature.textContent = `Temperature: ${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%`
  } catch {
    weatherError.textContent = `${data.message}`;
    temperature.textContent = '';
    weatherDescription.textContent = '';
    wind.textContent = '';
    humidity.textContent = ''
  }
};

document.addEventListener('DOMContentLoaded', getWeather);
cityField.addEventListener('change', getWeather);