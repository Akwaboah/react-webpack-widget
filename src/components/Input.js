import React from "react"
import './component.css'
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const FormikTextInputField = (props) => {
    return (
        <>
        <Field placeholder={props.placeholder} type={props.type} id={props.id} name={props.name} />
        <ErrorMessage name={props.name} component={TextError}/>
        </>
    );
}

export default FormikTextInputField;