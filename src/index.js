import {createStore} from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const num = document.querySelector("span");

const countModifier = (cnt = 0, action) => {
    if (action.type === "plus") {
        return cnt+1;
    } else if (action.type === "minus") {
        return cnt-1;
    } else {
        return 0;
    }
};
const countStore = createStore(countModifier);

const onChange = () => {
    num.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handlePlus = () => {
    countStore.dispatch({type:"plus"})
};

const handleMinus = () => {
    countStore.dispatch({type:"minus"})
};

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);
