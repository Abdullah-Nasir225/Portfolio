let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('.reset');
let msgcon = document.querySelector('.msg-container');
let itag = document.querySelector('.msg');
let newgamebtn = document.querySelector('#new');
let turnO = true;
let winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetgame = () =>{
     turnO = true;
     enabledboxes();
    msgcon.classList.add('hide');
   
    }
boxes.forEach((a)=>{
a.addEventListener('click',()=>{
if(turnO){
    a.innerHTML = 'o';
    turnO = false;
}
else{
a.innerHTML = 'x';
turnO  = true;
}
a.disabled = true;
checkwinner();
})
})

const disabledboxes = () =>{
for(let i of boxes){
i.disabled = true;
}
}

const enabledboxes = () =>{
for(i of boxes){
i.disabled = false;
i.innerText = '';

}

}


const showinner = (winner) =>{
itag.innerText = `Congratulation The winner is ${winner}`;
msgcon.classList.remove('hide');
disabledboxes();
}


const checkwinner = (()=>{
for(let i of winpattern){
    // console.log(i[0],i[1],i[2])
// console.log(boxes[i[0]],boxes[i[1]],boxes[i[2]])

let val1 = boxes[i[0]].innerText;

let val2 = boxes[i[1]].innerText;
let val3 = boxes[i[2]].innerText;
if(val1 != '' && val2 != '' && val3 != '' ){
    if(val1 === val2 && val2 === val3){
   console.log("The winner is",val1)
    showinner(val1);


    }
}
}
})
reset.addEventListener('click',resetgame)
newgamebtn.addEventListener('click',resetgame);














