import React from 'react'

export const HomeScreen = () => {
  return (
    <div className="homescreen">
        <div className='appname'>
            <h1>Quizeroo</h1>
            <p>Version 1.0 written with React.js</p>
        </div>

        <div className='buttons'>
            <button>👍 START</button>
            <button>🌐 ABOUT</button>
        </div>
    </div>
  )
}
