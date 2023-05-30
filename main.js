const quoteHeading = document.querySelector("h1");
const quoteAuthor = document.querySelector('h3');
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
  quoteAuthor.innerHTML = `— ${randomQuote.author}`;
}

let colorData = ["#B91C1C", "#C2410C", "#B45309", "#4D7C0F", "#15803D", "#0F766E", "#4338CA", "#4338CA", "#A21CAF", "#3730A3", "#9C0D38", "#586994"]


function changeBackgroundColor() {
  const randomColorNumber = Math.floor(Math.random() * colorData.length)

  let bgColor = colorData[randomColorNumber];
  document.body.style.backgroundColor = bgColor;
}


button.addEventListener('click', () => {
  getQuote();
  changeBackgroundColor();
  // color of body changes to a certain gradient
});