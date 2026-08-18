import './App.css'
import Card from "./components/Card.jsx";
import {useEffect, useState} from "react";

function App() {
    // making 20 random number pairs from 1 to 10
    const [shuffledNumbers, setShuffledNumbers] = useState([])

    useEffect(() => { // using useEffect with empty dependency to run only once when site is loaded
        const cardPairCount = 10
        let numbersForCards = []
        for (let i = 1; i <= cardPairCount; i++) {
            numbersForCards.push(i)
        }
        numbersForCards = [...numbersForCards, ...numbersForCards];
        setShuffledNumbers(shuffle(numbersForCards));
    }, [])
    

    // display-variables
    const [matches, setMatches] = useState(0)
    const [lives, setLives] = useState(10)




    const [firstSelectedCard, setFirstSelectedCard] = useState(null)

    function onCardClicked(cardId, numberOnCard) {
        // console.log("cardId=", cardId, ",numberOnCard=", numberOnCard);
        const currentSelectedCard = {id: cardId, number: numberOnCard};


        // no cards are selected yet
        if (firstSelectedCard === null) {
            setFirstSelectedCard(
                {id: cardId, number: numberOnCard}
            );


            console.log("card clicked . updated firstSelectedCard=", {id: cardId, number: numberOnCard});

            // return early so firstSelectedCard is not reset
            return

        }

        console.log("card clicked (2nd card):", currentSelectedCard)
        console.log("comparing cards...")

        if (firstSelectedCard.number === currentSelectedCard.number) {
            console.log("pair found", currentSelectedCard);
        } else {
            console.log("pair not matched. ", firstSelectedCard.number, "!=", currentSelectedCard.number);
        }

        // reset no matter what 2nd one was chosen
        setFirstSelectedCard(null)

        console.log("resetting firstSelectedCard to null (turn is finished)")

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
