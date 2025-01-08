let countLabel=document.getElementById("countLabel");
let increaseBtn= document.getElementById("increase");
let decreaseBtn= document.getElementById("decrease");
let resetBtn= document.getElementById("reset");
let counter=Number(countLabel.innerHTML);
increaseBtn.onclick=()=>{
    counter++;
    countLabel.innerHTML=counter;
}

decreaseBtn.onclick=()=>{
    if (counter > 0) {
        counter--;
        countLabel.innerHTML = counter;
    } else {
        document.getElementById("msg").textContent="Counter can't be negative";
    }
}

resetBtn.onclick=()=>{
    counter=0;
    countLabel.innerHTML=counter;
}