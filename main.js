const quoteHeading = document.querySelector("h1");
const quoteAuthor = document.querySelector('h4');
const button = document.querySelector('button')

let data = [];

fetch("https://api.superhi.com/api/test/quotes")
  .then(response => response.json())
  .then(jsonData => {
    data = jsonData
    getQuote();
  });

const getQuote = () => {
  // get a random quote
  const randomNumber = Math.floor(Math.random() * data.length)

  const randomQuote = data[randomNumber];

  // Change headingQuote randomly
  quoteHeading.innerHTML = randomQuote.quote;
  quoteAuthor.innerHTML = randomQuote.author;
}


button.addEventListener('click', () => {
  getQuote();
});