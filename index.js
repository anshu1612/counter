let countLabel=document.getElementById("countLabel");
let increaseBtn= document.getElementById("increase");
let decreaseBtn= document.getElementById("decrease");
let resetBtn= document.getElementById("reset");
let counter=Number(countLabel.innerHTML);

increaseBtn.onclick=()=>{
    counter++;
    countLabel.innerHTML=counter;
    document.getElementById("msg").classList.toggle("hidden", true)
}

decreaseBtn.onclick=()=>{
    if (counter > 0) {
        counter--;
        countLabel.innerHTML = counter;
    } else {
        document.getElementById("msg").classList.toggle("hidden", false);
        document.getElementById("msg").textContent="Counter can't be negative";
    }
}

resetBtn.onclick=()=>{
    counter=0;
    countLabel.innerHTML=counter;
    document.getElementById("msg").classList.toggle("hidden", true);
}