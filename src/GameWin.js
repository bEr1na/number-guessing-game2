import './style.css'

export default function GameWin({startNewGame}) {

    const handleStartNewGame=(e)=>{
        e.preventDefault()
        startNewGame();
    }
    return(
        <div className='game-win'>
        <div className='win-mssg'>Congratulations!!! You got it right!</div>
        <button onClick={handleStartNewGame}>Start new game</button>
        </div>
    )
}