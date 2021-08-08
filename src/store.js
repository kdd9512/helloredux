import {configureStore, createSlice} from "@reduxjs/toolkit";

// createSlice 이용하여 reducer, action 을 압축.
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
