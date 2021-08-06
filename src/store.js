import {createStore} from "redux";
import {createAction, createReducer} from "@reduxjs/toolkit";

// redux toolkit 이용하여 addTodo,delTodo 단축.
const addTodo = createAction("ADD");
const delTodo = createAction("DEL");


// const reducer = (state = [],action) => {
//     switch (action.type) {
//         case addTodo.type:
//             console.log(action);
//             return [{text:action.payload, id: Date.now()}, ...state];
//
//         case delTodo.type:
//             console.log(action);
//             return state.filter(toDo => toDo.id !== action.payload);
//         default:
//             return state;
//     }
// }

// redux toolkit 이용하여 reducer 단축.
const reducer = createReducer([], {
    [addTodo]: (state,action) => {
        // toolkit을 사용하는 경우, .push 를 사용할 수 있게된다.
        state.push({text:action.payload, id: Date.now()});
    },
    [delTodo]: (state,action) =>
        state.filter(toDo => toDo.id !== action.payload)
})

const store = createStore(reducer);

export const actionCreators = {
    addTodo, delTodo
}

export default store;
