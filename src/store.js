import {configureStore, createAction, createReducer, createSlice} from "@reduxjs/toolkit";

// // redux toolkit 이용하여 addTodo,delTodo 단축.
// const addTodo = createAction("ADD");
// const delTodo = createAction("DEL");
//
// // redux toolkit 이용하여 reducer 단축.
// const reducer = createReducer([], {
//     [addTodo]: (state,action) => {
//         // toolkit을 사용하는 경우, .push 를 사용할 수 있게된다.
//         state.push({text:action.payload, id: Date.now()});
//     },
//     [delTodo]: (state,action) =>
//         state.filter(toDo => toDo.id !== action.payload)
// })

const toDo = createSlice({
    name:"toDosReducer",
    initialState:[],
    reducers: {
        add: (state,action) => {
            state.push({text:action.payload, id: Date.now()})
        },
        del: (state,action) =>
        state.filter(toDo => toDo.id !== action.payload)

    }
});


// Redux dev tools 를 사용하기 위해 configureStore 를 사용.
const store = configureStore({reducer:toDo.reducer});

export const {add,del} = toDo.actions;

export default store;
