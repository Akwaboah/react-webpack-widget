import React from "react"
import './Input.css'

const TextInput = (props) => {
    return (
        <input className="text-input" required={props.required} placeholder={props.placeholder} type={props.type} id={props.id} name={props.name} />
    );
}

export default TextInput;