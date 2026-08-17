import './App.css'
import Card from "./components/Card.jsx";

function App() {
    const cardCount = 16





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
            </div>

            <br/><hr/>

            <div className="game-status">
                <p>Match: temp</p>
                <p>Lives: temp</p>
            </div>




        </div>
    )
}

export default App
