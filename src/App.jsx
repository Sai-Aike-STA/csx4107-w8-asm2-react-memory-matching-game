import './App.css'
import Card from "./components/Card.jsx";

function App() {
    // making 20 random number pairs from 1 to 10
    const cardPairCount = 10
    let numbersForCards = []
    for (let i = 1; i <= cardPairCount; i++) {
        numbersForCards.push(i)
    }
    numbersForCards = [...numbersForCards, ...numbersForCards];

    const shuffledNumbers = shuffle(numbersForCards);



    function onCardClicked(event) {
        console.log(event.target.id);
    }





    return (
        <div className="app-container">
            <h1>Memory Matching</h1>

            <div className="game-board">
                {shuffledNumbers.map(
                    (num, index) => (
                        <Card
                            key={index}  /* key={index} helps React manage the card inside the rendered list.   id={card-${index}} gives the card an HTML identifier such as card-3. */
                            id={`card-${index}`}
                            num={num}
                            onCardClicked={onCardClicked}
                        />
                    )
                )}
            </div>

            <br/><hr/>

            <div className="game-status">
                <p>Match: temp</p>
                <p>Lives: temp</p>
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
