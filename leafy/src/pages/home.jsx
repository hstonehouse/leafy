import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import '../assets/images/css/home.css';

export function Home() {
    return (
        <main>
            <div className="homepage-container">

                
                    <p id="heading">Leafy</p>
                    <FontAwesomeIcon icon="seedling" size="3x" color="rgb(17,136,60)" id="logo=image"/>

                    <a href="/login" className="button is-rounded" id="login-button">Log in</a>
                    <a href="/register" className="button is-rounded" id="register-button">Create account</a>
                
            </div>
        </main>
      );
}