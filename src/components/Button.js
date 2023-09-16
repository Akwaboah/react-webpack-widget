import React from "react";
import './Button.css';

const BtnSubmit = (props) => {
    return (<button className="btn-submit" type="submit">{props.value}</button>)
}

export default BtnSubmit;