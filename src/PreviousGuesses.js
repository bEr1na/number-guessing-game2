import './style.css'

export default function PreviousGuesses({previousGuesses}){
    return(
        <div className='previous-guesses'>Previous guesses: {previousGuesses.map(a=><span key={a}>{a}</span>).reduce((accu, elem) => {
            return accu === null ? [elem] : [...accu, ', ', elem]
        }, null)}</div>
    )
}