import './style.css'

export default function GameEnd({startNewGame}) {
    const handleStartNewGame=(e)=>{
        e.preventDefault()
        startNewGame();
    }

    return(
        <div className='game-end'>
        <div className='end-mssg'>Game Over!</div>
        <button onClick={handleStartNewGame}>Start new game</button>
        </div>
    )
}