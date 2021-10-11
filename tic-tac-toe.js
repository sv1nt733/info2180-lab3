document.addEventListener('DOMContentLoaded', ()  => {
    const gameBoard = document.getElementById("board").children;
    const xButton= "X";
    const oButton="O";
    let clicked;
    let play=true;
    var i;
    var gameState=['','','','','','','','',''];
  
    for(i=0;i<gameBoard.length;i++){
      gameBoard[i].setAttribute("class","square");
      gameBoard[i].addEventListener('click',clicks);
    }
    
    function clicks(event) {
      console.log(gameState);
      if(play==true || clicked==oButton){
        event.target.innerHTML= xButton;
        event.target.classList.add("X");
        clicked= xButton;
        play=false;
      }
      else if(clicked==xButton || play==false){
        event.target.innerHTML=oButton;
        event.target.classList.add("O");
        clicked=oButton;
        play=true;
      }  
      }
    })
  

