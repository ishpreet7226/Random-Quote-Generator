const quotes = ["I think, therefore I am. (Rene Descartes)","I may disagree with what you say, but I will defend to death your right to say it. (Evelyn Beatrice Hall)","If men were perfectly virtuous, they wouldn’t have friends. (Montesquieu)","Ignorance is bliss.",
    "People do what they hate for money and use the money to do what they love. (Jimmy O. Yangs dad?)",
    "Small things make perfection, but perfection is no small thing. (Sir Henry Royce)",
    "A masterpiece is born a masterpiece. (Hyouka)",
    "Who will guard the guardians?",
    "History will be kind to me, for I intend to write it. (Winston Churchill)",
    "No problem can be solved from the same level of consciousness that created it. We must see the world anew. (Albert Einstein)",
    "Anyone who has not experienced despair and frustration and never truly experienced joy.",
    "Anyone who does not evolve is a relic of the past.",
    "How would you live if you had the same amount of money that say the prince of Saudi Arabia has but didn't have to look after a country or a business? What would your house look like? And your yard? What would you wear? Would you still work?",
    "Better to be a loser among winners than to be a winner among losers. (I don't know if this is a quote, but couldnt find the source so Ive included it here.)",
    "The world operates on sheep mentality, and I hate it",
    "Guilt, disgust, and despair are the worst human emotions.",
    "I hope I m wrong, but if and when everybodys basic needs are fulfilled, the concept of whats basic will change, and thus, there will never be a time when everybodys needs are fulfilled.]"
]
const usedIndex = new Set()
function generateQuote(){
    while (true){
        const randomIndex = Math.floor(Math.random() * quotes.length );

        if (usedIndex.has(randomIndex)) {continue}
        else{           
            const quote = quotes[randomIndex];
            usedIndex.add(randomIndex);
            document.getElementById("quote").innerHTML = quote;
            break
        }
    }
}