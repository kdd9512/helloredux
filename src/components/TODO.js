import React from "react";
import {connect} from "react-redux";
import {del} from "../store";
import {Link} from "react-router-dom";

function TODO({text, onBtnClick, id}){
    return (
        <li>
            <Link to={`/${id}`}>
                {text}
            </Link>
            <button onClick={onBtnClick}>DEL</button>
        </li>
    )
}

function mapDispatchToProps(dispatch,ownProps){
    return {
        onBtnClick: () => dispatch(del(parseInt(ownProps.id)))
    }
}

export default connect(null, mapDispatchToProps)(TODO);