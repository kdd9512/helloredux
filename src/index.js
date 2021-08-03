import {createStore} from "redux";


// 01. intro
//
// const plus = document.getElementById("plus");
// const minus = document.getElementById("minus");
// const num = document.querySelector("span");
//
// num.innerText = 0;
//
// const PLUS = "plus";
// const MINUS = "minus";
//
// const countModifier = (cnt = 0, action) => {
//     switch (action.type) {
//         case PLUS:
//             return cnt + 1
//         case MINUS:
//             return cnt - 1
//         default:
//             return ;
//     }
//
// };
// const countStore = createStore(countModifier);
//
// const onChange = () => {
//     num.innerText = countStore.getState();
// };
//
// countStore.subscribe(onChange);
//
// const handlePlus = () => {
//     countStore.dispatch({type: PLUS})
// };
//
// const handleMinus = () => {
//     countStore.dispatch({type: MINUS})
// };
//
// plus.addEventListener("click", handlePlus);
// minus.addEventListener("click", handleMinus);


// 02. TODOS using REDUX

const ADD = "add";
const DEL = "del";

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return []
        case DEL:
            return []
        default:
            return state;
    }
};

const store = createStore(reducer);

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");


const createTodo = toDo => {
    const li = document.createElement("li");
    li.innerText = toDo;
    ul.appendChild(li);
}

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    store.dispatch({type:ADD, text:toDo});
}

form.addEventListener("submit", onSubmit);