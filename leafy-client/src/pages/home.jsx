import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import '../assets/css/home.css';
import '../assets/css/login-register.css';
import '../assets/css/myplants.css';
import '../assets/css/plantpage.css';

export function Home() {
    return (
        <main>
            <div className="homepage-container">
                    <p id="heading">Leafy</p>
                    <FontAwesomeIcon icon="seedling" size="3x" color="rgb(17,136,60)" id="logo-image"/>
                    <Link to="/login" className="button is-rounded" id="login-button"> Log in</Link>
                    <Link to="/register" className="button is-rounded" id="register-button"> Create Account</Link>
            </div>
        </main>
      ); 
}