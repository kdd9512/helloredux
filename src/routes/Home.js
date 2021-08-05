import React, {useState} from "react";
import {connect} from "react-redux";
import {actionCreators} from "../store";
import TODO from "../components/TODO";

function Home ({toDos, addTodo}) {
    const [text, setText]  = useState("");

    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        setText("");
        addTodo(text);
    }

    return (
        <>
            <h1>TO DO</h1>
            <form onSubmit={onSubmit}>
               <input type="text" value={text} placeholder="write to do" onChange={onChange}/>
                <button>add</button>
           </form>
            <ul>
                {toDos.map(
                    toDo => (
                        <TODO {...toDo} key={toDo.id}/>
                    ))}
            </ul>
        </>
    )
}

function mapStateToProps(state) {
    return {toDos: state};
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: text => dispatch(actionCreators.addTodo(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
