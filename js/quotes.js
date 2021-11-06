//Aray of objects. Each object has 2 string variables, (1 storing quotes, 1 stroing author)
const quotes = [
    {
        quote : "Your time is limited, so don't waste it living someone else's life. ",
        author : "Steve Jobs"
    },
    {
        quote : "Life is what happens when you're busy making other plans.",
        author : "John Lenon"
    },
    {
        quote : "Stay hungry, stary foolish",
        author : "Steve Jobs"
    },
    {
        quote : "Just do it",
        author : "Nike"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//To generate a random number between 0~3 : Math.floor((Math.random()*10)%quotes.length())

const todaysQuote = quotes[Math.floor((Math.random()*10)%quotes.length)];

quote.textContent = todaysQuote.quote;
author.textContent = todaysQuote.author;