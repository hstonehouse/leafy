import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

export function Register() {
    return (
        <section>
            <div>

                
                <div className="form-container">

                    <Link to="/">
                        <FontAwesomeIcon icon="arrow-left" size="2x" id="arrow"/>
                    </Link>

                    <label class="label">Create an account</label>
                    <label class="label"></label>
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
                            <input className="button is-rounded" type="submit" value="Register" id="form-button"></input>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}