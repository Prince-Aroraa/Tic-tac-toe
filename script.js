let btn = document.querySelectorAll(".box");
let winn = document.querySelector("#winn");
let reset = document.querySelector(".reset");
let newBtn = document.querySelector(".new");



const winMsg=(winner)=>{
    winn.innerText = `Congratulations! Winner is ${winner}`
    newBtn.classList.remove("hide")
    winn.classList.remove("hide")
}

const disableBox = ()=>{
    btn.forEach((box)=>{
        box.disabled = true;
    });
}

const enableBox = ()=>{
    btn.forEach((box)=>{
        box.disabled = false;
        box.innerText="";
    });
}

const resetbtn = ()=>{
    turnX = "X";
    enableBox();
    winn.innerText="";
    newBtn.classList.add("hide");
    winn.classList.add("hide");
}


turnX="X";

btn.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (box.innerText===""){
            if(turnX==="X"){
                box.innerText="X";
                turnX="O"
                console.log("btn pressed");
                
            }
            else{
                box.innerText="O";
                turnX="X";
                console.log("btn pressed");
            }
        }
        winChecker();
    });
});


winChance = [[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];

const winChecker = ()=>{
    for (chance of winChance){
        let chance1=btn[chance[0]].innerText;
        let chance2=btn[chance[1]].innerText;
        let chance3=btn[chance[2]].innerText;
        
        if (chance1 !=="" && chance2 !=="" && chance3!==""){
            if(chance1===chance2 && chance2===chance3){
                console.log("Winner",chance1);
                winMsg(chance1);
                disableBox();
            }
            
        }

    }
}

reset.addEventListener("click",resetbtn);
newBtn.addEventListener("click",resetbtn);

// const winChecker = ()=>{
//     winChance.forEach((chance)=>{
//         console.log(chance[0],chance[1],chance[2]);
//         console.log(btn[chance[0]].innerText,btn[chance[1]].innerText,btn[chance[2]].innerText);
//     })
// }

// winChecker();
