function Card(props) {
    const cardId = props.id
    const textToShowWhenNumberIsHidden = ""

    return (
        <button
            className="game-card"
            type={"button"}
            onClick={() => props.onCardClicked(cardId, props.numberOnCard)}
            id={cardId}
        >
            {props.isVisible ? props.numberOnCard : textToShowWhenNumberIsHidden}
        </button>

    )
}

export default Card