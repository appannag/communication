
import styled from "styled-components";
import "../index.css";

const MyForm = styled.form`
    //width: 50%;
    text-align: center;
    h2 {
        margin-top:5%; 
        margin-bottom:5%
    }
    h4{
        margin-top:3%;
    }
    button{
        margin-top:3%;
    }
`;

function Welcome() {
    return (
        <div>
        <MyForm>
            <h2>welcome to User Module</h2>
            <h4>Exisiting User</h4>
            <button type="button" className="btn btn-primary">
                Login
            </button>
            <h4>New User</h4>
            <button type="button" className="btn btn-primary">
                Register
            </button>
        </MyForm>
        </div>
    );
}

export default Welcome;