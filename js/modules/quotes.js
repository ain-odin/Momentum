import { getRandomNum } from './gitSlider.js';

const quoteText = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.author');
const changeQuoteButton = document.querySelector('.change-quote');

let randomNum = getRandomNum (0, 10);


export async function getQuotes() {  
  const quotes = 'quotes.json';
  const res = await fetch(quotes);
  const data = await res.json();

  try {
    quoteText.textContent = data[randomNum].text;
    quoteAuthor.textContent = data[randomNum].author;
  } catch(error) {
    console.log('Error: ', error);
  }
}

changeQuoteButton.addEventListener('click', changeQuote)

function changeQuote() {
  randomNum === 10 ? randomNum = 0 : randomNum += 1;
  getQuotes();
}