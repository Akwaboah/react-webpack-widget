import React from "react";
import './component.css'

const BtnSubmit = (props) => {
    return (<button className="btn-submit" type="submit">{props.value}</button>)
}

export default BtnSubmit;