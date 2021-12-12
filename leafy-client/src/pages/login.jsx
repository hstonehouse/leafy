import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";

export function Login() {
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [wrongPassword, setWrongPasswordBoolean] = useState(false);
    const navigate = useNavigate();

    const saveEmail = (event) => {
        setEmail(event.target.value);
    }

    const savePassword = (event) => {
        setPassword(event.target.value);
    }

    const logIn = async (event) => {
        event.preventDefault();
        try {
            await axios.post("api/login", {email: email, password: Password});
            navigate("/myplants");
        } catch (error) {
            setWrongPasswordBoolean(true);
        }
    }

    return (
        <section>
                <div>
                    <form className="form-container" onSubmit={logIn}>
                        <Link to="/">
                            <FontAwesomeIcon icon="arrow-left" size="2x" id="arrow"/>
                        </Link>
                        <label className="label">LOG IN</label>
                        {
                            wrongPassword ? <label className="label has-text-danger">Wrong email or password.</label> : <label></label> 
                        }
                        <div className="field">
                            <div className="control">
                                <input className="input" type="email" placeholder="Email" onChange={saveEmail}></input>
                            </div>
                        </div>
                    
                        <div className="field">
                            <div className="control">
                                <input className="input" type="password" placeholder="Password" onChange={savePassword}></input>
                            </div>
                        </div>
                    
                        <div className="field">
                            <div className="control">
                                <input className="button is-rounded is-success" type="submit" value="Log In" id="form-button" onClick={logIn}></input>
                            </div>
                        </div>
                    </form>
                </div>
            
        </section>
    )
}