const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const num = document.querySelector("span");

let cnt = 0;

num.innerText = cnt;

const updateText = () => {
    num.innerText = cnt;
}

const handlePlus = () => {
    cnt = cnt + 1;
    updateText();
}

const handleMinus = () => {
    cnt = cnt - 1;
    updateText();
}

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);