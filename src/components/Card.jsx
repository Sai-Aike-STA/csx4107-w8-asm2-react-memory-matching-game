function Card(props) {
    const cardId = props.id

    return (
        <button
            className="game-card"
            type={"button"}
            onClick={() => props.onCardClicked(cardId, props.numberOnCard)}
            id={cardId}
        >
            {props.numberOnCard}
        </button>

    )
}

export default Card