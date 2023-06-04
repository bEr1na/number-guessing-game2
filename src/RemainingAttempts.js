import './style.css'

export default function RemainingAttempts ({remainingAttempts}) {

    return(
        <div className='remaining-attempts'>
        Remaining attempts: {remainingAttempts}
        </div>
    )
}