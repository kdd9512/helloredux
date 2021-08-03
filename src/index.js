import {createStore} from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const num = document.querySelector("span");

num.innerText = 0;

const PLUS = "plus";
const MINUS = "minus";

const countModifier = (cnt = 0, action) => {
    switch (action.type) {
        case PLUS:
            return cnt + 1
        case MINUS:
            return cnt - 1
        default:
            return ;
    }

};
const countStore = createStore(countModifier);

const onChange = () => {
    num.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handlePlus = () => {
    countStore.dispatch({type: PLUS})
};

const handleMinus = () => {
    countStore.dispatch({type: MINUS})
};

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);
