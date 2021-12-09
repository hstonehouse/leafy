import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { GridImage } from '../components/grid-image';
import satinPothos from "../assets/images/satin-pothos.jpeg"

export function MyPlants() {
    return (
        <section>
            <nav className="is-flex is-justify-content-space-around" id="navbar">
                <FontAwesomeIcon icon="bars" size="2x" id="burger"/>
                <p>My Plants</p>
                <FontAwesomeIcon icon="plus-square" size="2x" id="add"/>
            </nav>
            <section>
                <GridImage />
            </section>

        </section>
    )
}