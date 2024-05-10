import React from 'react'
import "../styles.css"
import GameBoard from './GameBoard';

export default function Homepage() {
  return (
    <>
        <div className="homepage">
            <GameBoard></GameBoard>
        </div>
    </>
  )
}
