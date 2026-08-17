import './App.css'
import Card from "./components/Card.jsx";

function App() {
    // making 20 random number pairs from 1 to 10
    const cardCount = 20
    let numbersForCards = []
    for (let i = 1; i <= cardCount; i++) {
        numbersForCards.push(i)
    }
    numbersForCards = [...numbersForCards, ...numbersForCards];

    const shuffledNumbers = shuffle(numbersForCards);

    console.log(shuffledNumbers);





    return (
        <div className="app-container">
            <h1>Memory Matching</h1>

            <div className="game-board">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
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
