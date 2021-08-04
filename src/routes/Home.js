import React, {useState} from "react";

function Home () {
    const [text, setText]  = useState("");

    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        console.log(text);
    }

    return (
        <>
            <h1>TO DO</h1>
            <form onSubmit={onSubmit}>
               <input type="text" value={text} placeholder="write to do" onChange={onChange}/>
                <button>add</button>
           </form>
            <ul></ul>
        </>
    )
}

export default Home;
