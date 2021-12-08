import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import '../assets/images/css/login-register.css';

export function Login() {
    return (
        <section>
            
            <div>
                <Link to="/">
                    <FontAwesomeIcon icon="arrow-left" />
                </Link>
               
                <div className="form-container">
                    <label class="label">Log In</label>
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
                            <input className="button is-rounded is-success" type="submit" value="Log In"></input>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}