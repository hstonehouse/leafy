import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { useState } from 'react';

export function Register() {
    const [email, setEmail] = useState("");
    const [initialPassword, setInitialPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [wrongPassword, setWrongPasswordBoolean] = useState(false);
    
    const saveEmail = (event) => {
        setEmail(event.target.value);
    }

    const saveInitialPassword = (event) => {
        setInitialPassword(event.target.value);
    }

    const checkPassword = (event) => {
        setConfirmPassword(event.target.value);
    }

    const registerUser = (event) => {
        event.preventDefault();
        if (initialPassword === confirmPassword){
            console.log('Registered!');
            setWrongPasswordBoolean(false);
            // do axios post here
        } else {
            console.log("Wrong password!");
            setWrongPasswordBoolean(true);
        }   
    }

    return (
        <section>
            <div> 
                <form className="form-container" onSubmit={registerUser}>
                    <Link to="/">
                        <FontAwesomeIcon icon="arrow-left" size="2x" id="arrow"/>
                    </Link>
                    <label className="label">CREATE AN ACCOUNT</label>
                    {
                        wrongPassword ? <label className="label has-text-danger">Passwords do not match</label> : <label></label> 
                    }
                    <div className="field">
                        <div className="control">
                            <input className="input" type="email" placeholder="Email" onChange={saveEmail} required></input>
                        </div>
                    </div>
                
                    <div className="field">
                        <div className="control">
                            <input className="input" type="password" placeholder="Password" onChange={saveInitialPassword} required></input>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <input className="input" type="password" placeholder="Confirm Password" onChange={checkPassword} required></input>
                        </div>
                    </div>
                
                    <div className="field">
                        <div className="control">
                            <input className="button is-rounded" type="submit" value="Register" id="form-button" onClick={registerUser}></input>
                        </div>
                    </div>
                </form>

            </div>
        </section>
    )
}