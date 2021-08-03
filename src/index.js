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
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD = "add";
const DEL = "del";

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            // !! 중요
            // 이곳에서 state.push(action.text)로 기존 배열에 값을 추가하면 안된다(이를 mutate 라고 함).
            // 아래 작성한 대로 기존 배열의 값을 가지고(...state), 배열을 새로 만드는 방식을 사용해야 함.
            return [ {text: action.text, id: Date.now()}, ...state];
        case DEL:
            // !! 중요
            // 이곳에서 state.splice(action.id)로 기존 배열의 값을 제거하면 안된다(mutate 위반).
            // 아래 작성한 대로 filter 를 이용하여, 기존 배열의 값(toD0.id)과 deleteTod0 에서 가져온 action.id를 비교하여
            // 값을 필터링, 새 배열을 재작성 하는 방식을 이용해야 함.
            return state.filter(toDo => toDo.id !== action.id);
        default:
            return state;
    }
};

const store = createStore(reducer);

store.subscribe(() => store.getState());

const addTodo = (text) => {
    return {type: ADD, text}
};

const delTodo = (id) => {
    return {type: DEL, id}
};

const printTodos = () => {
    const toDos = store.getState();
    ul.innerHTML = "";
    toDos.forEach(toDo => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = "DEL";
        btn.addEventListener("click",dispatchDelTodo);
        li.id = toDo.id;
        li.innerText = toDo.text;
        li.appendChild(btn);
        ul.appendChild(li);
    })
}

store.subscribe(printTodos)

const dispatchAddTodo = text => {
    store.dispatch(addTodo(text));
};

const dispatchDelTodo = e => {
    const id = parseInt(e.target.parentNode.id);
    store.dispatch(delTodo(id));
};

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    dispatchAddTodo(toDo);
}

form.addEventListener("submit", onSubmit);