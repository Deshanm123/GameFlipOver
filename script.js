document.addEventListener('DOMContentLoaded' , () => {

const cardArray = [
     //flip to match to twin images  
    {
        name:'tuxBatman',
        img :"Images/tuxBatman.png"
    },
    {
        name:'tuxBatman',
        img :'Images/tuxBatman.png'
    },

    {   name:'tuxGangster',
        img :'Images/tuxGangster.png'
    },
    {   name:'tuxGangster',
        img :'Images/tuxGangster.png'
    },

    {   name:'tuxOS',
        img :'Images/tuxOS.png'
    },
    {   name:'tuxOS',
        img :'Images/tuxOS.png'
    },

    {   name:'tuxTombRaider',
        img :'Images/tuxTombRaider.png'
    },
    {   name:'tuxTombRaider',
        img :'Images/tuxTombRaider.png'
    },

    {   name:'tuxWalker',
        img :'Images/tuxWalker.png'
    },
    {   name:'tuxWalker',
        img :'Images/tuxWalker.png'
    },

    {   name:'tuxRambo',
        img :'Images/tuxRambo.png'
    },
    {   name:'tuxRambo',
        img :'Images/tuxRambo.png'
    },
]; 

// randomizing te card array
cardArray.sort( ()=> 0.5 - Math.random());


//declaring constant variables
const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result'); 

//creating an empty array for chosen card to push 
var cardChosen = [];
var cardChosenId =[]; 
var cardsWon = [];
 

//***Board Create function***
function createBoard() {
for(let i=0; i<cardArray.length; i++){
    var card = document.createElement('img');
    card.setAttribute('src','Images/js.png'); 
    card.setAttribute('data-id',i); 
    //calling flip card function 
    card.addEventListener('click',flipCard);
    grid.appendChild(card);
 }
} 
//***checking for twins function
function checkForMatch() {
    var cards =  document.querySelectorAll('img');
    const optionOneId = cardChosenId[0];
    const optionTwoId = cardChosenId[1];
    
    if (cardChosen[0] === cardChosen[1]){
        alert("You have found a match");
        //removing the cardfrom the game
        cards[optionOneId].setAttribute('src','Images/jsTanu.png');
        cards[optionTwoId].setAttribute('src','Images/jsTanu.png');
        cardsWon.push(cardChosen); 
    }
    else{
        cards[optionOneId].setAttribute('src','Images/js.png'); 
        cards[optionTwoId].setAttribute('src','Images/js.png');
        alert("sorry! Try again");
    }

 //after if or else need to empty the array for another round
 cardChosen=[];
 cardChosenId=[];
  //displaying the cards  we can pass 
 resultDisplay.textContent = cardsWon.length;
 if(cardsWon.length == cardArray.length/2 )
    resultDisplay.textContent = alert('Congratulations!,You have found them all');
}


   
//***flip card function***
function flipCard(){
 var cardId = this.getAttribute('data-id');
 //Once we locate the card using card id we will get its relevant name
 cardChosen.push(cardArray[cardId].name);
 cardChosenId.push(cardId);
 //since flip card already works,we happened to pick a card;
 //this attribute alllows to add a image to that square based on 
///card id it has caught,this refer to picked card
 this.setAttribute('src',cardArray[cardId].img);
 //limiting up to two cards at once to be inserted at chosenCard array
 if (cardChosen.length === 2){
     //buffer time to 500milisecs 
setTimeout(checkForMatch,500);
 }


}

//calling function
createBoard();
});
