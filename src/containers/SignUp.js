import React from "react";
import './SignUp.css';
import FormikTextInputField from "../components/Input";
import BtnSubmit from "../components/Button";
import * as yup from 'yup';
import { Formik, Form } from "formik";

const submitSignUp = (values) => {
    console.log('Values Gained: ', values)
}
const initialValues = {email: '', password: '', confirmPassword: ''}
const getCharacterValidationError = (str) => {
    return `Your password must have at least 1 ${str} character`;
  };
const validationSchema = yup.object({
    email: yup.string().email().required('Required!'),
    password: yup.string()
    .required("Please enter a password")
    // check minimum characters
    .min(6, "Password must have at least 6 characters")
    // different error messages for different requirements
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
    confirmPassword: yup.string()
    .required("Please re-type your password")
    // use oneOf to match one of the values inside the array.
    // use "ref" to get the value of passwrod.
    .oneOf([yup.ref("password")], "Passwords does not match"),
});

const SignUp = (props) => {
    return (
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit = {submitSignUp}
        >
            <div className="form-body">
                <section className="header-section"><h1>Welcome, SignUp</h1></section>
                <Form className="form-section">
                    <FormikTextInputField placeholder="Email" type="email" id="email" name="email"/>
                    <FormikTextInputField placeholder="Password" type="password" id="password" name="password"/>
                    <FormikTextInputField placeholder="Confirm Password" type="password" id="confirmPassword" name="confirmPassword"/>
                    <BtnSubmit value="SIGNUP" />
                </Form>
            </div>
        </Formik>
    );
}

export default SignUp;