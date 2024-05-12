import React from 'react'
import "../styles.css"


function registerPlay(e){
  console.log(e.target)
  console.log(e.target.getAttribute("data-boxid"))
}

export default function GameBoard() {
  var playBoxes = document.getElementsByClassName("playingBox")
  
  for(let i=0; i<playBoxes.length; i++){
      playBoxes[i].addEventListener('click', registerPlay);
      console.log("done")
  }
  return (
    <div className='gameBoardContainer'>
      <div className="smallerGameContainer">
        <div className='smallGameBoard '>
          <div className="playingBox" data-boxid="1">
            <div className="circle"></div>          
          </div>
          <div className="playingBox" data-boxid="2">
            <div className="cross"></div>          
          </div>
          <div className="playingBox" data-boxid="3"></div>
          <div className="playingBox" data-boxid="4"></div>  
          <div className="playingBox" data-boxid="5"></div>
          <div className="playingBox" data-boxid="6"></div>
          <div className="playingBox" data-boxid="7"></div>
          <div className="playingBox" data-boxid="8"></div>
          <div className="playingBox" data-boxid="9"></div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide "></div>
        <div className="winningCircle hide"></div>
      </div>
      <div className="smallerGameContainer">
        <div className='smallGameBoard '>
          <div className="playingBox" data-boxid="10">
            <div className="circle"></div>          
          </div>
          <div className="playingBox" data-boxid="11">
            <div className="cross"></div>          
          </div>
          <div className="playingBox" data-boxid="12"></div>
          <div className="playingBox" data-boxid="13"></div>  
          <div className="playingBox" data-boxid="14"></div>
          <div className="playingBox" data-boxid="15"></div>
          <div className="playingBox" data-boxid="16"></div>
          <div className="playingBox" data-boxid="17"></div>
          <div className="playingBox" data-boxid="18"></div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide hide"></div>
        <div className="winningCircle hide"></div>
      </div>
      <div className="smallerGameContainer">
        <div className='smallGameBoard '>
          <div className="playingBox" data-boxid="19">
            <div className="circle"></div>          
          </div>
          <div className="playingBox" data-boxid="20">
            <div className="cross"></div>          
          </div>
          <div className="playingBox" data-boxid="21"></div>
          <div className="playingBox" data-boxid="22"></div>  
          <div className="playingBox" data-boxid="23"></div>
          <div className="playingBox" data-boxid="24"></div>
          <div className="playingBox" data-boxid="25"></div>
          <div className="playingBox" data-boxid="26"></div>
          <div className="playingBox" data-boxid="27"></div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide hide"></div>
        <div className="winningCircle hide"></div>
      </div>
      <div className="smallerGameContainer">
        <div className='smallGameBoard '>
          <div className="playingBox" data-boxid="28">
            <div className="circle"></div>          
          </div>
          <div className="playingBox" data-boxid="29">
            <div className="cross"></div>          
          </div>
          <div className="playingBox" data-boxid="30"></div>
          <div className="playingBox" data-boxid="31"></div>  
          <div className="playingBox" data-boxid="32"></div>
          <div className="playingBox" data-boxid="33"></div>
          <div className="playingBox" data-boxid="34"></div>
          <div className="playingBox" data-boxid="35"></div>
          <div className="playingBox" data-boxid="36"></div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide hide"></div>
        <div className="winningCircle hide"></div>
      </div>
      <div className="smallerGameContainer">
        <div className='smallGameBoard '>
          <div className="playingBox" data-boxid="37">
            <div className="circle"></div>          
          </div>
          <div className="playingBox" data-boxid="38">
            <div className="cross"></div>          
          </div>
          <div className="playingBox" data-boxid="39"></div>
          <div className="playingBox" data-boxid="40"></div>  
          <div className="playingBox" data-boxid="41"></div>
          <div className="playingBox" data-boxid="42"></div>
          <div className="playingBox" data-boxid="43"></div>
          <div className="playingBox" data-boxid="44"></div>
          <div className="playingBox" data-boxid="45"></div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide hide"></div>
        <div className="winningCircle hide"></div>
      </div>
      <div className="smallerGameContainer">
        <div className='smallGameBoard '>
          <div className="playingBox" data-boxid="46">
            <div className="circle"></div>          
          </div>
          <div className="playingBox" data-boxid="47">
            <div className="cross"></div>          
          </div>
          <div className="playingBox" data-boxid="48"></div>
          <div className="playingBox" data-boxid="49"></div>  
          <div className="playingBox" data-boxid="50"></div>
          <div className="playingBox" data-boxid="51"></div>
          <div className="playingBox" data-boxid="52"></div>
          <div className="playingBox" data-boxid="53"></div>
          <div className="playingBox" data-boxid="54"></div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide hide"></div>
        <div className="winningCircle hide"></div>
      </div>
      <div className="smallerGameContainer">
        <div className='smallGameBoard '>
          <div className="playingBox" data-boxid="55">
            <div className="circle"></div>          
          </div>
          <div className="playingBox" data-boxid="56">
            <div className="cross"></div>          
          </div>
          <div className="playingBox" data-boxid="57"></div>
          <div className="playingBox" data-boxid="58"></div>  
          <div className="playingBox" data-boxid="59"></div>
          <div className="playingBox" data-boxid="60"></div>
          <div className="playingBox" data-boxid="61"></div>
          <div className="playingBox" data-boxid="62"></div>
          <div className="playingBox" data-boxid="63"></div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide hide"></div>
        <div className="winningCircle hide"></div>
      </div>
      <div className="smallerGameContainer">
        <div className='smallGameBoard '>
          <div className="playingBox" data-boxid="64">
            <div className="circle"></div>          
          </div>
          <div className="playingBox" data-boxid="65">
            <div className="cross"></div>          
          </div>
          <div className="playingBox" data-boxid="66"></div>
          <div className="playingBox" data-boxid="67"></div>  
          <div className="playingBox" data-boxid="68"></div>
          <div className="playingBox" data-boxid="69"></div>
          <div className="playingBox" data-boxid="70"></div>
          <div className="playingBox" data-boxid="71"></div>
          <div className="playingBox" data-boxid="72"></div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide hide"></div>
        <div className="winningCircle hide"></div>
      </div>
      <div className="smallerGameContainer">
        <div className='smallGameBoard'>
          <div className="playingBox" data-boxid="73">
            <div className="circle"></div>          
          </div>
          <div className="playingBox" data-boxid="74">
            <div className="cross"></div>          
          </div>
          <div className="playingBox" data-boxid="75"></div>
          <div className="playingBox" data-boxid="76"></div>  
          <div className="playingBox" data-boxid="77"></div>
          <div className="playingBox" data-boxid="78"></div>
          <div className="playingBox" data-boxid="79"></div>
          <div className="playingBox" data-boxid="80"></div>
          <div className="playingBox" data-boxid="81"></div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide hide"></div>
        <div className="winningCircle hide hide"></div>
      </div>

  

    </div>
  )
}


