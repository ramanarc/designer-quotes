const quoteHeading = document.querySelector("h1");
const quoteAuthor = document.querySelector('h4');
const button = document.querySelector('button')
console.log(quoteHeading);

const data = [
  { quote: "You can have an art experience in front of a Rembrandt… or in front of a piece of graphic design", author: "Dieter Rams" },
  { quote: "Graphic design will save the world right after rock and roll does.", author: "John Dahlback" },
  { quote: "It’s through mistakes that you actually can grow. You have to get bad in order to get good.", author: 'Nigahiga' }
]



const getQuote = () => {
  // get a random quote
  // quoteHeading.innerHTML = 'Randomized Quote here which sounds nice' + Math.random();
  const randomNumber = Math.floor(Math.random() * data.length)

  const randomQuote = data[randomNumber];

  // Change headingQuote randomly
  quoteHeading.innerHTML = randomQuote.quote;
  quoteAuthor.innerHTML = randomQuote.author;
}


button.addEventListener('click', () => {
  getQuote();
});