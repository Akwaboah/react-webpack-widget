import React from "react";
import './SignUp.css';
import TextInput from "../components/Input";
import BtnSubmit from "../components/Button";

const SignUp = (props) => {
    return (
        <div className="form-body">
            <section className="header-section"><h1>Welcome, SignUp</h1></section>
            <form className="form-section">
                <TextInput placeholder="Email" type="email" id="email" name="email" required={true} />
                <TextInput placeholder="Password" type="password" id="confirmPassword1" name="confirmPassword1" required={true} />
                <TextInput placeholder="Confirm Password" type="password" id="confirmPassword2" name="confirmPassword2" required={true} />
                <BtnSubmit value="SIGNUP" />
            </form>
        </div>
    );
}

export default SignUp;