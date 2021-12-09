import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { GridImage } from '../components/grid-image';
import satinPothos from "../assets/images/satin-pothos.jpeg"
import devilsivy from "../assets/images/devils-ivy.jpeg"
import begonia from "../assets/images/begonia-maculata.jpeg"

export function MyPlants() {
    return (
        <section id="my-plants">
            <nav className="is-flex is-justify-content-space-around" id="navbar">
                <FontAwesomeIcon icon="bars" size="2x" id="burger"/>
                <p>My Plants</p>
                <FontAwesomeIcon icon="plus-square" size="2x" id="add"/>
            </nav>

            <p>Click + to add your first plant.</p>

            {/* <div className="all-plants">
                <GridImage image={satinPothos} name="Satin Pothos"/>
                <GridImage image={devilsivy} name="Devil's Ivy"/>
                <GridImage image={begonia} name="Begonia Maculata"/>
            </div> */}

        </section>
    )
}