
// accessing of all nodes
let choices=document.querySelectorAll(".choices");
let msg=document.getElementById("msg");
let you=document.getElementById("you");
let comp=document.getElementById("comp");
let reset=document.querySelector("#reset");
let announcement=document.querySelector(".announcement");
let content=document.querySelector(".content");

// initialisation of score counters
let userscore=0;
let compscore=0;

// 4.
const drawgame=()=>{
    msg.innerText="Game is draw";
    msg.style.backgroundColor="rgb(9, 8, 35)"     
}

// 5.
const showWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){  //true
        userscore++;
        you.innerText=userscore;
        msg.innerText=`you won! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green"; 
    }
    else{   //if user loses
        compscore++;
        comp.innerText=compscore;
        msg.innerText=`you lose! ${compchoice} beats your ${userchoice}`; 
        msg.style.backgroundColor="red"; 
    }
    finalwinner();
}

// 7.                   here i want ki once that final announcement is made a div can appera before (upper) of the whole content so that we will not be able to click/touch neeche ka time
let unclickable=()=>{   //to make the thins unclickable if once our final announcement is made
    let upperdiv=document.createElement("div");
    content.before(upperdiv);   //after creating an element it is mandatory to locate at somewhere
    upperdiv.setAttribute("id","newDiv")
    upperdiv.style.height="100vh";
    upperdiv.style.width="100vw";
    upperdiv.style.zIndex="2";   //zindex will only work if we have given some position(accordingly) to that element except "static"
    upperdiv.style.position="absolute";
}

// 6.
let finalwinner=()=>{ //i am using it as i want to create a winning limit
    if(userscore===5){
        announcement.innerText="Congratulations! You Won";
        announcement.style.visibility="visible";
        announcement.style.color="green";
        announcement.style.marginLeft="27%";
        unclickable();
       }
    else if(compscore===5){console.log("computer win the whole game")
        announcement.innerText="oops! You lose";
        announcement.style.visibility="visible";
        announcement.style.color="red";
        announcement.style.marginLeft="36%";
        unclickable();
    }
}

// 3.
const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);  //random generate number between 0-1 and here we have to get the number between 0-3 that's why we multiplied it with 3
    return options[randomIdx];
};

// 2.
const playgame=(userchoice)=>{
    let compchoice=genCompChoice();
    // playing game:
    if(userchoice===compchoice){
      drawgame();
    }
    else{
        let userWin=true;    //it will track that user win or lose
        if(userchoice==="rock"){
            if(compchoice==="paper"){
               userWin=false;
            }
            else{
                userWin=true;     //here this else denotes scissors as if comp ne rock chose kiya hota to wo outer if me hi draw ho gya hota or paper ko hum inner if me le hi chuke hain to finally else me scissors hi aaya  
            }
        }
        else if(userchoice==="paper"){
            if(compchoice==="scissors"){
               userWin=false;
            }
            else{
                userWin=true;
            }
        }
        else{  //for user's choice=scissors
          if(compchoice==="rock"){
            userWin=false;
          }
          else{
            userWin=true;
          }
        }
     showWinner(userWin,userchoice,compchoice);     //now we are using this function to print that what we are getting in userWin,userchoice,compchoice
    }
};

//1.
choices.forEach((choice)=>{     //for each function is used to get all choice(options) one by one 
    choice.addEventListener("click",()=>{
    let userchoice=choice.getAttribute("id");
    playgame(userchoice); 
    });
});

//9.
function removeElement(){
    let upperdiv=document.querySelector("#newDiv");
    if(upperdiv){ //exists? yess
        upperdiv.remove();
    }
}

// 8.   here we are only able to click reset button after the appereance of that new div as it has more zindex value that that new div
reset.addEventListener("click",()=>{
    userscore=0;
    compscore=0;
    you.innerText="0";
    comp.innerText="0";
    msg.innerText="Pick Your Move";
    msg.style.backgroundColor="rgb(9, 8, 35)";
    announcement.style.visibility="hidden";
    removeElement();
})

