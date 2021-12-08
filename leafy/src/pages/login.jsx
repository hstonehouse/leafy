import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

export function Login() {
    return (
        <div>
            <Link to="/">
                <FontAwesomeIcon icon="arrow-left" />
            </Link>
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
                    <input className="button" type="submit" value="Log In"></input>
                </div>
            </div>
        </div>
    )
}