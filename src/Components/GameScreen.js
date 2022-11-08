import React from 'react'

export default function GameScreen(){
    return (
        <div className='gamescreen'>
            <div className='score'>
                <h1>Score: <span id="score">0</span></h1>
            </div>
            <div className='question'>
                <h1>THE QUESTION NAME</h1>
                
            </div>

            <span className="alert alert-error">Error Message</span>

            <div className="answers">
                <div className='answer'>ANSWER 1</div>
                <div className='answer'>ANSWER 2</div>
                <div className='answer'>ANSWER 3</div>
                <div className='answer'>ANSWER 4</div>
            </div>
        </div>
    )
}

