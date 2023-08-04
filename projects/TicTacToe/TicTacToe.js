let firstPlayer = "X"
let secondPlayer = "O"
let currentPlayer = "X"
let boxes = document.querySelectorAll(".box")

boxes[0].setAttribute("idx",0)
boxes[1].setAttribute("idx",1)
boxes[2].setAttribute("idx",2)
boxes[3].setAttribute("idx",3)
boxes[4].setAttribute("idx",4)
boxes[5].setAttribute("idx",5)
boxes[6].setAttribute("idx",6)
boxes[7].setAttribute("idx",7)
boxes[8].setAttribute("idx",8)

let final = Array(9).fill(null)
for(let i = 0 ; i < boxes.length ; i++){
    boxes[i].addEventListener("click",selectBox);
}

let arr = Array(9)

let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
]

function checkWinner(){
  for(let i = 0 ; i < winningCombinations.length ; i++){
    let a = winningCombinations[i][0];
    let b = winningCombinations[i][1];
    let c = winningCombinations[i][2];
if(final[a] == final[b] && final[b] == final[c] && final[a] != null && final[b] != null && final[c] != null){
  let congrats = document.getElementById("congrats")
  congrats.innerText = `Congrats ${final[a]} you won the game`
  document.getElementById("alert").style.cssText = "display: block";
}

  }
}


function selectBox(event){
let particularEvent = event.target;
let idx = particularEvent.getAttribute("idx")

console.log(final)
  if(idx == "0"){
    let x = document.querySelector(`div[idx="0"]`);
    if(x.innerText == ''){  
    x.innerText = `${currentPlayer}`
   if(currentPlayer == "X"){
    currentPlayer = "O"
    final[0] = "X"
   }else{
    currentPlayer = "X"
    final[0] = "O"
   }
  }

  checkWinner();
  }

  if(idx == "1"){
    let x = document.querySelector(`div[idx="1"]`);
    if(x.innerText == ''){  
    x.innerText = `${currentPlayer}`
    if(currentPlayer == "X"){
     currentPlayer = "O"
     final[1] = "X"
    }else{
     currentPlayer = "X"
     final[1] = "O"
    }
  }
  checkWinner();
  }

  if(idx == "2"){
let x = document.querySelector(`div[idx="2"]`);
  if(x.innerText == ''){   
  x.innerText = `${currentPlayer}`
   if(currentPlayer == "X"){
    currentPlayer = "O"
    final[2] = "X"
   }else{
    currentPlayer = "X"
    final[2] = "O"
   }
  }
  checkWinner();
  }

  if(idx == "3"){
  let x = document.querySelector(`div[idx="3"]`);
  if(x.innerText == ''){
  x.innerText = `${currentPlayer}`
   if(currentPlayer == "X"){
    currentPlayer = "O"
    final[3] = "X"
   }else{
    currentPlayer = "X"
    final[3] = "O"
   }  
  }
  checkWinner();
  }

  if(idx == "4"){
let x = document.querySelector(`div[idx="4"]`);
  if(x.innerText == ''){  
  x.innerText = `${currentPlayer}`
   if(currentPlayer == "X"){
    currentPlayer = "O"
    final[4] = "X"
   }else{
    currentPlayer = "X"
    final[4] = "O"
   }
  }
  checkWinner();
  }

  if(idx == "5"){
let x = document.querySelector(`div[idx="5"]`); 
   if(x.innerText == ''){   
   x.innerText = `${currentPlayer}`
   if(currentPlayer == "X"){
    currentPlayer = "O"
    final[5] = "X"
   }else{
    currentPlayer = "X"
    final[5] = "O"
   }
  }
  checkWinner();
  }

  if(idx == "6"){
let x = document.querySelector(`div[idx="6"]`); 
   if(x.innerText == ''){  
    x.innerText = `${currentPlayer}`
    if(currentPlayer == "X"){
    currentPlayer = "O"
    final[6] = "X"
   }else{
    currentPlayer = "X"
    final[6] = "O"
   }
  }
  checkWinner();
  }


  if(idx == "7"){
let x = document.querySelector(`div[idx="7"]`);
   if(x.innerText == ''){
   x.innerText = `${currentPlayer}`
   if(currentPlayer == "X"){
    currentPlayer = "O"
    final[7] = "X"
   }else{
    currentPlayer = "X"
    final[7] = "O"
   }
  }
  checkWinner();
  }

  if(idx == "8"){
    let x = document.querySelector(`div[idx="8"]`);
    if(x.innerText == ''){
    x.innerText = `${currentPlayer}`
    if(currentPlayer == "X"){
     currentPlayer = "O"
     final[8] = "X"
    }else{
     currentPlayer = "X"
     final[8] = "O"
    }
  }
  checkWinner();
  }
console.log(arr)
}

