var btn = document.getElementById("btn");
var quotes = document.getElementById("Quotes");
var quotesWriter = document.getElementById("QuotesWriter");
var quotesList =
 [
   "A rose by any other name would smell as sweet.",
   "All the world’s a stage, and all the men and women merely players.",
   "Ask not what your country can do for you; ask what you can do for your country.",
   "Ask, and it shall be given you; seek, and you shall find.",
   "Eighty percent of success is showing up.",
   "Elementary, my dear Watson.",
   "For those to whom much is given, much is required.",
   "Genius is one percent inspiration and ninety-nine percent perspiration.",
   "Hell has no fury like a woman scorned.",
   "I love the smell of napalm in the morning."
 ];
 var quotesWriterList =
 [
    "~By William Shakespeare",
    "~By William Shakespeare",
    "~By John Kennedy",
    "~By Woody Allen",
    "~By Sherlock Holmes",
    "~By the Bible",
    "~By the Bible",
    "~By Thomas Edison",
    "~By William Congreve",
    "~By Lt. Kilgore"
 ]

 btn.addEventListener("click",()=>{
     quotes.innerHTML= quotesList[Math.floor(Math.random()*quotesList.length)];
     quotesWriter.classList.remove("QuotesWriter_hide");
     quotesWriter.classList.add("QuotesWriter");
     quotesWriter.innerHTML = quotesWriterList[Math.floor(Math.random()*quotesList.length)];

 })

//  console.log(quotesList[Math.floor(Math.random()*quotesList.length)])
// console.log(quotesWriter.innerHTML);