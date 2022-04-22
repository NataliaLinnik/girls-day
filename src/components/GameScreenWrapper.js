function GameScreenWrapper(props) {
    return (
        <div onClick={() => console.log("click")}>{props.children}</div>
    )
}

export default GameScreenWrapper;