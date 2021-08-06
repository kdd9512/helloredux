import {createStore} from "redux";
import {createAction} from "@reduxjs/toolkit";

const ADD = "ADD";
const DEL = "DEL";

// const addTodo = text => {
//     return {
//         type:ADD,
//         text
//     }
// }
//
// const delTodo = id => {
//     return {
//         type:DEL,
//         id
//     }
// }

// redux toolkit 이용하여 addTodo,delTodo 단축.
const addTodo = createAction("ADD");
const delTodo = createAction("DEL");


const reducer = (state = [],action) => {
    switch (action.type) {
        case addTodo.type:
            console.log(action);
            return [{text:action.payload, id: Date.now()}, ...state];

        case delTodo.type:
            console.log(action);
            return state.filter(toDo => toDo.id !== action.payload);
        default:
            return state;
    }
}

const store = createStore(reducer);

export const actionCreators = {
    addTodo, delTodo
}

export default store;
