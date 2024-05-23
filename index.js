var quotes = [
    {quote : "It's not what happens to you, but how you react to it that matters." , author : "--Epictetus"},
    {quote : "Resentment is like drinking poison and waiting for your enemies to die." , author : "--Nelson Mandela"},
    {quote : "Do not take life too seriously. You will not get out alive." , author : "--Elbert Hubbard"},
    {quote : "The best revenge is massive success." , author : "--Frank Sinatra"},
    {quote : "You miss 100% of the shots you don't take." , author : "--Wayne Gretzy"}
]

function getQuotes(){
    var num = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[num].quote;
    document.getElementById("author").innerHTML = quotes[num].author;

}