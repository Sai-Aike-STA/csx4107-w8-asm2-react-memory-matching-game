import './App.css'
import Card from "./components/Card.jsx";
import {useState} from "react";

function App() {
    // making 20 random number pairs from 1 to 10
    const cardPairCount = 10
    let numbersForCards = []
    for (let i = 1; i <= cardPairCount; i++) {
        numbersForCards.push(i)
    }
    numbersForCards = [...numbersForCards, ...numbersForCards];

    const shuffledNumbers = shuffle(numbersForCards);
    
    // display variables
    const [matches, setMatches] = useState(0)
    const [lives, setLives] = useState(10)




    let firstSelectedCardOfPair = ""
    let isFirstCardAlreadySelected = false;
    function onCardClicked(cardId, numberOnCard) {
        console.log("cardId=", cardId, ",numberOnCard=", numberOnCard);
        const currentCardID = cardId;
        const currentCardNumber = numberOnCard;

        // TODO not done yet
        // no cards are selected yet
        if (isFirstCardAlreadySelected === false) {
            isFirstCardAlreadySelected = true;
            firstSelectedCardOfPair = currentCardNumber;
        }


        if (isFirstCardAlreadySelected === true) {
            if (firstSelectedCardOfPair === currentCardNumber) {
                console.log("pair found");
            }
        }



    }





    return (
        <div className="app-container">
            <h1>Memory Matching</h1>

            <div className="game-board">
                {shuffledNumbers.map(
                    (numberOnCard, index) => (
                        <Card
                            key={index}  /* key={index} helps React manage the card inside the rendered list.   id={card-${index}} gives the card an HTML identifier such as card-3. */
                            id={`card-${index}`}
                            numberOnCard={numberOnCard}
                            onCardClicked={onCardClicked}
                        />
                    )
                )}
            </div>

            <br/><hr/>

            <div className="game-status">
                <p>Match: {matches}</p>
                <p>Lives: {lives}</p>
            </div>




        </div>
    )
}

function shuffle(array) {
    const shuffledArray = [...array]

    for (let index = shuffledArray.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1))

        const temporaryValue = shuffledArray[index]
        shuffledArray[index] = shuffledArray[randomIndex]
        shuffledArray[randomIndex] = temporaryValue
    }

    return shuffledArray
}

export default App
