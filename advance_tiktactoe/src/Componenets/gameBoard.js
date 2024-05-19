import React from 'react';
import "../styles.css";

var bigGameData = [
  -1, -1, -1, 
  -1, -1, -1, 
  -1, -1, -1
];

var smallGameData = [
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

var disabledBoxes = [];
var turn = 0;
var allowedBigBox = -1;

function checkBigWin(){
  console.log(bigGameData)
  for (let i = 0; i < winCombos.length; i++) {
    const [x,y,z] = winCombos[i];

    if (bigGameData[x] !== -1 && bigGameData[x] === bigGameData[y] && bigGameData[x] === bigGameData[z]) {
      var winner = bigGameData[x] === 1 ? 1 : 0;
      return winner;
    }
  }

  if (bigGameData.includes(-1)) {
    return -1;
  } else {
    return -2;
  }
}


function checkWin(bigSquare){
  for (let i = 0; i < winCombos.length; i++) {
    var x = winCombos[i][0]+bigSquare*9;
    var y = winCombos[i][1]+bigSquare*9;
    var z = winCombos[i][2]+bigSquare*9;

    if (smallGameData[x] !== -1 && smallGameData[x] === smallGameData[y] && smallGameData[x] === smallGameData[z]) {
      
      disabledBoxes.push(bigSquare);
      var winner = smallGameData[x] === 1 ? 1 : 0;
      return [winner, i+1];
    }
  }

  var currentBoxes = smallGameData.slice(bigSquare*9, (bigSquare+1)*9)

  if (currentBoxes.includes(-1)) {
    return [-1, null];
  } else {
    return [-2, null];
  }
}


function validPlay(boxNumber){
  var legalBigBox = (Math.floor(boxNumber/9) === allowedBigBox || allowedBigBox === -1) && !(disabledBoxes.includes(Math.floor(boxNumber/9) ));
  var legalSmallBox = smallGameData[boxNumber] === -1;
  
  return legalBigBox && legalSmallBox;  

}


function adjustWinningLine(lineElement, winSequence){

  switch (winSequence) {
    case 1:
      lineElement.style.transform = "rotate(0deg)";
      lineElement.style.left = "0px";
      lineElement.style.right = "0px";
      lineElement.style.top = "17%";
      break;
    
    case 2:
      lineElement.style.transform = "rotate(0deg)";
      lineElement.style.left = "0px";
      lineElement.style.right = "0px";
      lineElement.style.top = "48%";
      break;
    
    case 3:
      lineElement.style.transform = "rotate(0deg)";
      lineElement.style.left = "0px";
      lineElement.style.right = "0px";
      lineElement.style.top = "80%";
      break;
    
    case 4:
      lineElement.style.transform = "rotate(90deg)";
      lineElement.style.left = "-30%";
      lineElement.style.right = "usnet";
      lineElement.style.top = "50%";
      break;
    
    case 5:
      lineElement.style.transform = "rotate(90deg)";
      lineElement.style.left = "5%";
      lineElement.style.right = "usnet";
      lineElement.style.top = "50%";
      break;
    
    case 6:
      lineElement.style.transform = "rotate(90deg)";
      lineElement.style.left = "38%";
      lineElement.style.right = "usnet";
      lineElement.style.top = "50%";
      break;
    
    case 7:
      lineElement.style.transform = "rotate(45deg)";
      lineElement.style.left = "0px";
      lineElement.style.right = "0px";
      lineElement.style.top = "unset";
      break;
    
    case 8:
      lineElement.style.transform = "rotate(-45deg)";
      lineElement.style.left = "0px";
      lineElement.style.right = "0px";
      lineElement.style.top = "unset";
      break;
    
    default:
      alert("INVALID INPUT");
      break;
  }

}

function registerPlay(e){
  var boxElement = e.target;

  var boxId = boxElement.getAttribute("data-boxid");
  var bigBox = Math.floor((boxId-1)/9);
  var smallBox = boxId % 9 || 9;

  console.log("Played", bigBox+1, smallBox);

  if (boxId >= 0 && validPlay(boxId-1)){

    smallGameData[boxId-1] = turn;
    var playerSign = (turn)?"cross":"circle";
    boxElement.getElementsByClassName("signHolder")[0].classList.add(playerSign);
    
    var [winner, winningSequence] = checkWin(bigBox);
    var bigWinner = -1;
    var lineElement = null;

    if (winner === 1){

      disabledBoxes.push(bigBox)
      bigGameData[bigBox] = 1;
      bigWinner = checkBigWin();


      boxElement.parentNode.classList.add("disabled");
      boxElement.parentNode.parentNode.getElementsByClassName("winningCross")[0].classList.remove("hide");

      lineElement = boxElement.parentNode.parentNode.getElementsByClassName("winningLine")[0]
      lineElement.classList.remove("hide");
      adjustWinningLine(lineElement, winningSequence);
      
      if (bigWinner === 1){
        alert("Player 2 wins the game");
      }
      else if(bigWinner === -2){
        alert("The game ends in a draw.");
      }
      else{
        alert("Player 2 has occupied the box");

      }
    }
    else if(winner === 0){

      bigGameData[bigBox] = 0
      disabledBoxes.push(bigBox)
      bigWinner = checkBigWin();

      boxElement.parentNode.classList.add("disabled");
      boxElement.parentNode.parentNode.getElementsByClassName("winningCircle")[0].classList.remove("hide");

      lineElement = boxElement.parentNode.parentNode.getElementsByClassName("winningLine")[0]
      lineElement.classList.remove("hide");
      adjustWinningLine(lineElement, winningSequence);


      if(bigWinner === 0){
        alert("Player 1 wins the game");
      }
      else if(bigWinner === -2){
        alert("The game ends in a draw.")
      }
      else{
        alert("Player 1 has occupied the box");
      }
    }
    else if(winner === -2){
      bigGameData[bigBox] = -2
      disabledBoxes.push(bigBox)
      bigWinner = checkBigWin();
      alert("No one gets the box");
    }

    // allowedBigBox = smallBox-1;
    // if (disabledBoxes.includes(allowedBigBox)){
    //   allowedBigBox = -1;
    // }
    turn = (turn)?0:1;
  }
  else{
    console.log("invalid", allowedBigBox, disabledBoxes);
    alert("Invlid");
  }
}

export default function GameBoard() {
  return (
    <div className='gameBoardContainer'>
      <div className="smallerGameContainer">  
        <div className='smallGameBoard '>
          <div className="playingBox" onClick={registerPlay} data-boxid="1">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="2">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="3">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="4">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="5">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="6">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="7">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="8">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="9">
            <div className="signHolder"></div>
          </div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide "></div>
        <div className="winningCircle hide"></div>
      </div>
      <div className="smallerGameContainer">
        <div className='smallGameBoard '>
          <div className="playingBox" onClick={registerPlay} data-boxid="10">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="11">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="12">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="13">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="14">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="15">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="16">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="17">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="18">
            <div className="signHolder"></div>
          </div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide hide"></div>
        <div className="winningCircle hide"></div>
      </div>
      <div className="smallerGameContainer">
        <div className='smallGameBoard '>
          <div className="playingBox" onClick={registerPlay} data-boxid="19">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="20">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="21">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="22">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="23">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="24">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="25">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="26">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="27">
            <div className="signHolder"></div>
          </div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide hide"></div>
        <div className="winningCircle hide"></div>
      </div>
      <div className="smallerGameContainer">
        <div className='smallGameBoard '>
          <div className="playingBox" onClick={registerPlay} data-boxid="28">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="29">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="30">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="31">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="32">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="33">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="34">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="35">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="36">
            <div className="signHolder"></div>
          </div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide hide"></div>
        <div className="winningCircle hide"></div>
      </div>
      <div className="smallerGameContainer">
        <div className='smallGameBoard '>
          <div className="playingBox" onClick={registerPlay} data-boxid="37">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="38">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="39">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="40">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="41">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="42">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="43">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="44">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="45">
            <div className="signHolder"></div>
          </div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide hide"></div>
        <div className="winningCircle hide"></div>
      </div>
      <div className="smallerGameContainer">
        <div className='smallGameBoard '>
          <div className="playingBox" onClick={registerPlay} data-boxid="46">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="47">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="48">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="49">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="50">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="51">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="52">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="53">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="54">
            <div className="signHolder"></div>
          </div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide hide"></div>
        <div className="winningCircle hide"></div>
      </div>
      <div className="smallerGameContainer">
        <div className='smallGameBoard '>
          <div className="playingBox" onClick={registerPlay} data-boxid="55">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="56">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="57">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="58">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="59">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="60">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="61">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="62">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="63">
            <div className="signHolder"></div>
          </div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide hide"></div>
        <div className="winningCircle hide"></div>
      </div>
      <div className="smallerGameContainer">
        <div className='smallGameBoard '>
          <div className="playingBox" onClick={registerPlay} data-boxid="64">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="65">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="66">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="67">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="68">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="69">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="70">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="71">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="72">
            <div className="signHolder"></div>
          </div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide hide"></div>
        <div className="winningCircle hide"></div>
      </div>
      <div className="smallerGameContainer">
        <div className='smallGameBoard'>
          <div className="playingBox" onClick={registerPlay} data-boxid="73">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="74">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="75">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="76">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="77">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="78">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="79">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="80">
            <div className="signHolder"></div>
          </div>
          <div className="playingBox" onClick={registerPlay} data-boxid="81">
            <div className="signHolder"></div>
          </div>
          <div className="winningLine hide"></div>
        </div>
        <div className="winningCross hide hide"></div>
        <div className="winningCircle hide hide"></div>
      </div>
    </div>
  )
}


