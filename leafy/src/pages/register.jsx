import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

export function Register() {
    return (
        <div>
             <Link to="/">
                <FontAwesomeIcon icon="arrow-left" />
            </Link>
            <h2>Create an account</h2>
            <div className="field">
                <div className="control">
                    <input className="input" type="email" placeholder="Email"></input>
                </div>
            </div>
        
            <div className="field">
                <div className="control">
                    <input className="input" type="password" placeholder="Password"></input>
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <input className="input" type="password" placeholder="Confirm Password"></input>
                </div>
            </div>
        
            <div className="field">
                <div className="control">
                    <input className="button" type="submit" value="Register"></input>
                </div>
            </div>
        </div>
    )
}