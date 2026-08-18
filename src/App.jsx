import './App.css'
import Card from "./components/Card.jsx";
import {useEffect, useState} from "react";

function App() {

    // making 20 random number pairs from 1 to 10
    const [gameCards, setGameCards] = useState([])

    useEffect(() => { // using useEffect with empty dependency to run only once when site is loaded
        let numbersForCards = []

        const cardPairCount = 10
        for (let i = 1; i <= cardPairCount; i++) {
            numbersForCards.push(i)
        }
        numbersForCards = [...numbersForCards, ...numbersForCards]  // all 20 numbers
        const shuffledNumbers = shuffle(numbersForCards)

        const cards = shuffledNumbers.map(
            (number, index) => {
                return {
                    id: `card-${index}`,
                    number: number,
                    isVisible: false
                }
            }
        )

        setGameCards(cards)

    }, [])


    // display-variables
    const [matches, setMatches] = useState(0)
    const [lives, setLives] = useState(10)


    // to track which card is selected
    const [firstSelectedCard, setFirstSelectedCard] = useState(null)

    function onCardClicked(cardId, numberOnCard) {
        // console.log("cardId=", cardId, ",numberOnCard=", numberOnCard);
        const currentSelectedCard = {id: cardId, number: numberOnCard};


        // selecting the first card
        if (firstSelectedCard === null) {
            setFirstSelectedCard(
                {id: cardId, number: numberOnCard}
            );

            console.log("card clicked . updated firstSelectedCard=", {id: cardId, number: numberOnCard});

            // show selected card
            setGameCards(
                gameCards.map((gameCard, index) => {
                    // modify isVisible for only the selected card
                    if (gameCard.id === currentSelectedCard.id) {
                        return {
                            ...gameCard,
                            isVisible: true
                        }
                    }
                    return gameCard
                })
            );

            // return early so firstSelectedCard is not reset
            return

        }

        console.log("card clicked (2nd card):", currentSelectedCard)
        console.log("comparing cards... ", firstSelectedCard, "=?=", currentSelectedCard)
        console.log(firstSelectedCard.number, "=?=", currentSelectedCard.number)

        // show selected card
        setGameCards(gameCards.map((gameCard, index) => {
            if (gameCard.id === currentSelectedCard.id) {
                return {
                    ...gameCard,
                    isVisible: true
                }
            }
            return gameCard
        }))


        const isSameID = firstSelectedCard.id === currentSelectedCard.id
        const isSameNumber = firstSelectedCard.number === currentSelectedCard.number

        // selecting the card that was previously selected
        if (isSameID) {
            console.log("the same card was selected. not doing anything")
            return
        }

        // selecting the correct pair (2nd)
        if (isSameNumber && !isSameID) {
            console.log("pair found", currentSelectedCard);
            setMatches(matches + 1)

        } else {
            console.log("pair not matched. ",);
            setLives(lives - 1)

            // hide selected cards (first and second)
            setTimeout(() =>
                setGameCards(gameCards.map((gameCard, index) => {
                    if (gameCard.id === currentSelectedCard.id || gameCard.id === firstSelectedCard.id) {
                        return {
                            ...gameCard,
                            isVisible: true
                        }
                    }
                    return gameCard
                })), 1400); // milliseconds


        }

        // reset no matter what 2nd one was chosen to reset the turn
        setFirstSelectedCard(null)
        console.log("resetting firstSelectedCard to null (turn is finished)")

    }


    return (
        <div className="app-container">
            <h1>Memory Matching</h1>

            <div className="game-board">
                {gameCards.map(
                    (card, index) => (
                        <Card
                            key={index}  /* key={index} helps React manage the card inside the rendered list.
                            id gives the card an HTML identifier such as card-3. */
                            id={card.id}
                            numberOnCard={card.number}
                            isVisible={card.isVisible}
                            onCardClicked={onCardClicked}

                        />
                    )
                )}
            </div>

            <br/>
            <hr/>

            <div className="game-status">
                <p>Match: {matches}</p>
                <p>Lives: {lives}</p>
                <p>{(matches >= 10) ? "YOU WIN" : ""}</p>
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
