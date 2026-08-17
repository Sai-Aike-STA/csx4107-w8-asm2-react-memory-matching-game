function Card(props) {

    return (
        <button
            className="game-card"
            type={"button"}
            onClick={props.onCardClicked}
            id={props.id}
        >
            {props.num}
        </button>

    )
}

export default Card