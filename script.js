let gameSeq=[];
let userSeq=[];
let btns=["green","yellow","red","blue"];
// let h2=document.querySelector("h2");
let h2 = document.querySelector("#instructions");
let startBtn = document.querySelector("#startBtn");


let start=false;
let level=0;

startBtn.addEventListener("click", () => {
    if (!start) {
        start = true;
        startBtn.style.display = "none";
        levelUp();
    }
});
// document.addEventListener("keypress",()=>{
//     if(start==false){
//         start=true;
//         levelUp();
//     }
// })

function gameFlash(randBtn){
    randBtn.classList.add("gameFlash");
    setTimeout(function(){
        randBtn.classList.remove("gameFlash");
    },500); 
}

function userFlash(randBtn){
    randBtn.classList.add("userFlash");
    setTimeout(function(){
        randBtn.classList.remove("userFlash");
    },400); 
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let index=Math.floor(Math.random()*4);
    let color=btns[index];
    let randBtn=document.querySelector(`.${color}`);
    gameSeq.push(color);
    gameFlash(randBtn);
}

function checkAns(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length===userSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}<b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="rgba(35, 217, 217, 0.169)";
        },150)
        reset();
    }
}


function btnpress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    let index=userSeq.length-1;
    checkAns(index);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
