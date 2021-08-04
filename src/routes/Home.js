import React, {useState} from "react";

function Home () {
    const [text, setText]  = useState("");

    function onChange(e) {
        setText(e.target.value);
    }

    return (
        <>
            <h1>TO DO</h1>
            <form>
               <input type="text" value={text} placeholder="write to do" onChange={onChange}/>
           </form>
        </>
    )
}
