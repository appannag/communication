import Styled from "styled-components";
import { useState } from "react";

const MyForm = Styled.div`
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

function Login() {

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    const validateForm = (key, value) => {
        switch (key) {

            case "password":
                setErrors({ ...errors, password: value.length <= 0 ? "password must be required" : "" });
                break;

            case "email":
                setErrors({ ...errors, email: value.length <= 0 ? "Email must be required" : "" });
                break;
            default:
                break;
        }
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setLoginForm({ ...loginForm, [id]: value });
        validateForm(id, value);
    };

    return (<MyForm>
        <h2>Login</h2>
        <form>
            <div className="row form-group">
                <label className="col">Email address</label>
                <input type="email" className="col form-control" id="email" onChange={handleInputChange} aria-describedby="emailHelp" placeholder="Enter email" />

            </div>
            <div className="row"><span className="col-6 error">{errors.email}</span></div>

            <div className="row form-group">
                <label className="col">Password</label>
                <input type="password" className="col form-control" onChange={handleInputChange} id="password" placeholder="Password" />
            </div>
            <div className="row"><span className="col-6 error">{errors.password}</span></div>
            <div className="row form-group">
                <button type="submit" className="col-3 btn btn-primary" onClick={handleInputChange}>Login</button>
            </div>
        </form>
    </MyForm>);
}

export default Login;