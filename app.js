let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
// console.log(messageEl)
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector(".sum-el")
let cardEl = document.querySelector(".card-el")

function getRandomCard() {
    let randomNumber =  Math.floor(Math.random()*13)+1

    if(randomNumber>10){
        return 10
    } else if (randomNumber === 10){
    return 11
    }else {
        return randomNumber
    }

}

function startGame(){
    renderGame()
}


function renderGame(){

    cardEl.textContent = "Cards: "
    for ( let i=0; i< cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum ;

if(sum <= 20){
    message="do you want to draw a new card?"
}
else if(sum === 21) {
    message= "you've got Blackjack!"
    hasBlackJack = true

}
else {
    message="you're out of the game!"
    isAlive = false
}


messageEl.textContent = message
}

function newCard (){
    console.log("Drawing a new card from thw deck!")
    let card = getRandomCard();

    sum += card;
    cards.push(card)
    console.log(cards)

    renderGame()
}

