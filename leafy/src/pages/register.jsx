import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

export function Register() {
    return (
        <body>
            <div>
                <Link to="/">
                    <FontAwesomeIcon icon="arrow-left" />
                </Link>
                <div className="form-container">
                    <label class="label">Create an account</label>
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
                            <input className="button is-rounded" type="submit" value="Register"></input>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}