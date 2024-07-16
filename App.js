//let boxes = document.querySelector(".box");
const boxes = document.querySelectorAll('.box');
let reset = document.querySelector("#reset-btn");
let newgame = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")
let player1 = 'O';
let player2 = "X";

let turno = true;

let winpattern = [
              [0,1,2],
              [0,3,6],
              [0,4,8],
              [1,4,7],
              [2,5,8],
              [2,4,6],
              [3,4,5],
              [6,7,8]
];


boxes.forEach((box) =>{
    box.addEventListener("click", ()=> {
       if(turno){
        box.innerText =player1;
        turno=false;
       }
       else{
        box.innerText =player2;
        turno = true;
       }
       box.disabled =true;
       //box.style.backgroundColor = "lightblue";
       // box.style.color = "red"
       box.classList.add("clicked");

       checkWinner()
    });
    
})

const checkWinner = ()=>{
  let win =false;
  for(let pattern of winpattern){
    let p1 = boxes[pattern[0]].innerText;
    let p2 = boxes[pattern[1]].innerText;
    let p3 = boxes[pattern[2]].innerText;

    if(p1 != "" && p2 != "" && p3 !=""){
      if(p1===p2 && p2===p3){
        disabledallbox();
        showinner(p1);
        return;
      }
    }
  }
  if ([...boxes].every(box => box.innerText !== "" && win===false)) {
    setTimeout(() => alert("It's a draw!"), 2); // Use setTimeout to ensure the alert shows after the DOM update
    disabledallbox();
  
  }
};

const disabledallbox=()=>{
  boxes.forEach(box =>{
  box.disabled=true;
})}


const showinner = (winner) =>{
  msg.innerText = `Congratulation, ${winner} you are Winner`;
  msgcontainer.classList.remove('hide');
} ;

reset.addEventListener("click", Reset);
newgame.addEventListener("click", Reset);
  
  function Reset(){
  boxes.forEach(box =>{
    box.disabled=false;
    box.innerText="";
    box.classList.remove("clicked");
    msgcontainer.classList.add('hide');
   })
}
