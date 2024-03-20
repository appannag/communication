import { useState } from "react";
import "../index.css";
import styled from "styled-components";

const RegForm = styled.form`
    width: 50%;
    text-align: left;
    margin-left:30%;

    button {
        margin-left:40%;
        margin-top:5%;
    };

    input {
        margin-bottom:2%;
    }
    .error {
        color:red;
        font-size: 11px; 
        margin-left:48%; 
        margin-top:-2%; 
        text-align: left !important;

      }
      h2 {
        margin-right:20%; 
        margin-bottom:5%;
        text-align: center;
      }
`;

function Register() {


    const [registerForm, setRegisterForm] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })


    const validateForm = (key, value) => {
        switch (key) {
            case "fullName":
                setErrors({ ...errors, fullName: value.length < 5 ? "Full name must be 5 characters in length" : "" });
                break;

            case "password":
                setErrors({ ...errors, password: value.length < 5 ? "password must be 5 characters in length" : "" });
                break;

            case "email":
                setErrors({ ...errors, email: value.length < 5 ? "Email must be 5 characters in length" : "" });
                break;

            case "confirmPassword":
                setErrors({ ...errors, confirmPassword: registerForm.password == registerForm.confirmPassword ? "Passwored and confirm passwored must be the same" : "" });
                break;
            default:
                break;
        }
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setRegisterForm({ ...registerForm, [id]: value });
        validateForm(id, value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (<div>
        <RegForm>
            <h2>Register</h2>
            <div className="row form-group">
                <label className="col">Full name:</label>
                <input value={registerForm.fullName} onChange={handleInputChange} type="fullName" className="col form-control" id="fullName" aria-describedby="emailHelp" placeholder="Enter Full Name" />
            </div>
            <div className="row"><span className="col-6 error">{errors.fullName}</span></div>

            <div className="row form-group">
                <label className="col">Email address:</label>
                <input value={registerForm.email} onChange={handleInputChange} type="email" className="col form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="row"><span className="col-6 error">{errors.email}</span></div>

            <div className="row form-group">
                <label className="col">Password:</label>
                <input value={registerForm.password} onChange={handleInputChange} type="password" className="col form-control" id="password" placeholder="Password" />
            </div>
            <div className="row"><span className="col-6 error">{errors.password}</span></div>

            <div className="row form-group">
                <label className="col">Confirm Password:</label>
                <input value={registerForm.confirmPassword} onChange={handleInputChange} type="confirmPassword" className="col form-control" id="confirmPassword" placeholder="confirmPassword" />
            </div>
            <div className="row"><span className="col-6 error">{errors.confirmPassword}</span></div>

            <div className="row">
                <button type="submit" onSubmit={handleSubmit} className="col-3 btn btn-primary">Register</button>
            </div>
        </RegForm>
    </div>);
}

export default Register;