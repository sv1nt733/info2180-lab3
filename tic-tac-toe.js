document.addEventListener('DOMContentLoaded', ()  => {
    const box = document.getElementById("board").children;
    const xButton= "X";
    const oButton="O";
    let clicked;
    var play=true;
    var i;
    var gameState=['','','','','','','','',''];
    // const winCombo=[
    //     [0, 1, 2],
    //     [3, 4, 5],
    //     [6, 7, 8],
    //     [0, 3, 6],
    //     [1, 4, 7],
    //     [2, 5, 8],
    //     [0, 4, 8],
    //     [2, 4, 6]
    // ];
  
    for(i=0;i<box.length;i++){
        box[i].classList.add("square");
        box[i].addEventListener("click",clicks, {once:true});
        box[i].addEventListener("mouseenter",hoverStart);
        box[i].addEventListener("mouseleave",hoverEnd);   
    }

    function clicks(event) {
        console.log(gameState);
        if(play==true){
            event.target.innerHTML= xButton;
            event.target.classList.add("X");
            clicked= xButton;
            play=false;
            winner(plays);
        }
      
        else {
            event.target.innerHTML=oButton;
            event.target.classList.add("O");
            clicked=oButton;
            play=true;
            winner(plays);
        }  
    }

    
    function hoverStart(event){
        event.target.classList.add("hover");
    }
      
    function hoverEnd(event){
        event.target.classList.remove("hover");
    }
    

  
    const reloadButton = document.querySelector("button");   
    function reload(){
        reload = location.reload();
    }
  
    reloadButton.addEventListener("click",reload,false);
  

    function winner(plays){
        if (plays[0].innerHTML===plays[1].innerHTML&& plays[1].innerHTML===[2].innerHTML&& plays[1]!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + plays[0].innerHTML +  " is the winner"
        }
        else if (plays[0].innerHTML===plays[3].innerHTML&&plays[3].innerHTML===plays[6].innerHTML && plays[3].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + plays[0].innerHTML +  " is the winner"
        }
        else if (plays[0].innerHTML===plays[0].innerHTML&&plays[0].innerHTML===plays[4].innerHTML && plays[8].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + plays[0].innerHTML +  " is the winner"
        }
        else if (plays[2].innerHTML===plays[5].innerHTML&&plays[5].innerHTML===plays[8].innerHTML && plays[2].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + plays[2].innerHTML +  " is the winner"
        }
        else if (plays[2].innerHTML===plays[4].innerHTML&&plays[4].innerHTML===plays[6].innerHTML && plays[2].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + plays[2].innerHTML +  " is the winner"
        }
  
        else if (plays[3].innerHTML===plays[4].innerHTML&&plays[4].innerHTML===plays[5].innerHTML && plays[3].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + plays[3].innerHTML +  " is the winner"
        }
        else if (plays[6].innerHTML===plays[7].innerHTML&&plays[7].innerHTML===plays[8].innerHTML && plays[6].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + plays[0] +  " is the winner"
        }
        else if (plays[1].innerHTML===plays[3].innerHTML&&plays[3].innerHTML===plays[6].innerHTML && plays[3].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + plays[0] +  " is the winner"
        }
    }
  
  })
  
  
  
  