import React from 'react'
import "../styles.css"

let gameData = [
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 
  -1, -1, -1, -1, -1, -1, -1, -1, -1
];

var turn = 0;

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkWin(bigSquare){
  for (let i = 0; i < winCombos.length; i++) {
    var x = winCombos[i][0]+bigSquare*9;
    var y = winCombos[i][1]+bigSquare*9;
    var z = winCombos[i][2]+bigSquare*9;
    console.log(gameData[x], gameData[y], gameData[z], bigSquare)
    if (gameData[x] === undefined){
      console.log(x, y, z, bigSquare)
    }
    
    if (gameData[x] !== -1 && gameData[x] === gameData[y] && gameData[x] === gameData[z]) {
        return `Player ${gameData[x] === 1 ? 'Cross' : 'Circle'} has won!`;
    }
  }

  var currentBoxes = gameData.slice(bigSquare*9, (bigSquare+1)*9)
  if (currentBoxes.includes(-1)) {
    return null;
  } else {
    return "It's a draw!";
  }
}

function validPlay(boxNumber){
  return gameData[boxNumber] === -1;
}


function registerPlay(e){
  var boxId = e.target.getAttribute("data-boxid")
  var bigBox = Math.ceil(boxId/9)
  var smallBox = boxId % 9 || 9
  console.log("Played", bigBox, smallBox)
  if (boxId >= 0 && validPlay(boxId)){
    gameData[boxId-1] = turn;
    turn = !turn;
    var ret = checkWin(bigBox-1);
    if (ret){
      alert(ret);
    }
  }
  else{
    console.log("invalid", boxId)
  }
}

export default function GameBoard() {
  return (
    <div className='gameBoardContainer'>
      <div className="smallerGameContainer">  
        <div className='smallGameBoard '>
          <div className="playingBox" onClick={registerPlay} data-boxid="1">
            <div className="circle"></div>          
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="2">
            <div className="cross"></div>          
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="3"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="4"></div>  
          <div className="playingBox" onClick={registerPlay} data-boxid="5"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="6"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="7"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="8"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="9"></div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide "></div>
        <div className="winningCircle hide"></div>
      </div>
      <div className="smallerGameContainer">
        <div className='smallGameBoard '>
          <div className="playingBox" onClick={registerPlay} data-boxid="10">
            <div className="circle"></div>          
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="11">
            <div className="cross"></div>          
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="12"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="13"></div>  
          <div className="playingBox" onClick={registerPlay} data-boxid="14"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="15"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="16"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="17"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="18"></div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide hide"></div>
        <div className="winningCircle hide"></div>
      </div>
      <div className="smallerGameContainer">
        <div className='smallGameBoard '>
          <div className="playingBox" onClick={registerPlay} data-boxid="19">
            <div className="circle"></div>          
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="20">
            <div className="cross"></div>          
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="21"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="22"></div>  
          <div className="playingBox" onClick={registerPlay} data-boxid="23"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="24"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="25"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="26"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="27"></div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide hide"></div>
        <div className="winningCircle hide"></div>
      </div>
      <div className="smallerGameContainer">
        <div className='smallGameBoard '>
          <div className="playingBox" onClick={registerPlay} data-boxid="28">
            <div className="circle"></div>          
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="29">
            <div className="cross"></div>          
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="30"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="31"></div>  
          <div className="playingBox" onClick={registerPlay} data-boxid="32"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="33"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="34"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="35"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="36"></div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide hide"></div>
        <div className="winningCircle hide"></div>
      </div>
      <div className="smallerGameContainer">
        <div className='smallGameBoard '>
          <div className="playingBox" onClick={registerPlay} data-boxid="37">
            <div className="circle"></div>          
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="38">
            <div className="cross"></div>          
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="39"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="40"></div>  
          <div className="playingBox" onClick={registerPlay} data-boxid="41"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="42"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="43"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="44"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="45"></div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide hide"></div>
        <div className="winningCircle hide"></div>
      </div>
      <div className="smallerGameContainer">
        <div className='smallGameBoard '>
          <div className="playingBox" onClick={registerPlay} data-boxid="46">
            <div className="circle"></div>          
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="47">
            <div className="cross"></div>          
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="48"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="49"></div>  
          <div className="playingBox" onClick={registerPlay} data-boxid="50"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="51"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="52"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="53"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="54"></div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide hide"></div>
        <div className="winningCircle hide"></div>
      </div>
      <div className="smallerGameContainer">
        <div className='smallGameBoard '>
          <div className="playingBox" onClick={registerPlay} data-boxid="55">
            <div className="circle"></div>          
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="56">
            <div className="cross"></div>          
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="57"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="58"></div>  
          <div className="playingBox" onClick={registerPlay} data-boxid="59"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="60"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="61"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="62"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="63"></div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide hide"></div>
        <div className="winningCircle hide"></div>
      </div>
      <div className="smallerGameContainer">
        <div className='smallGameBoard '>
          <div className="playingBox" onClick={registerPlay} data-boxid="64">
            <div className="circle"></div>          
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="65">
            <div className="cross"></div>          
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="66"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="67"></div>  
          <div className="playingBox" onClick={registerPlay} data-boxid="68"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="69"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="70"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="71"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="72"></div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide hide"></div>
        <div className="winningCircle hide"></div>
      </div>
      <div className="smallerGameContainer">
        <div className='smallGameBoard'>
          <div className="playingBox" onClick={registerPlay} data-boxid="73">
            <div className="circle"></div>          
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="74">
            <div className="cross"></div>          
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="75"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="76"></div>  
          <div className="playingBox" onClick={registerPlay} data-boxid="77"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="78"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="79"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="80"></div>
          <div className="playingBox" onClick={registerPlay} data-boxid="81"></div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide hide"></div>
        <div className="winningCircle hide hide"></div>
      </div>
    </div>
  )
}


