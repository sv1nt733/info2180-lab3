document.addEventListener('DOMContentLoaded', ()  => {
  const gameBoard = document.getElementById("board").children;

  for(i=0;i<gameBoard.length;i++){
    gameBoard[i].setAttribute("class","square");
  }
})
