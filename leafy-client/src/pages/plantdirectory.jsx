import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { GridImage } from '../components/grid-image'
import axios from "axios";

export function PlantDirectory() {
    const [sidebar, setSidebar] = useState(false);
    const [plantArray, setPlantArray] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        async function fetchData() {
            try {
                const response = await axios.get("/api/plantdirectory");
                setPlantArray(response.data);
                
            } catch (error) {
                console.log("error", error)
            }
        }
        fetchData();
    }, [])

    const showSideBar = () => {
        const sidebarDiv = document.querySelector(".sidebar");
        sidebarDiv.style.display = "none";
        if (sidebar) {
            sidebarDiv.style.display = " ";
            sidebarDiv.style.display = "none";
            setSidebar(false);
        } else {
            sidebarDiv.style.display = " ";
            sidebarDiv.style.display = "block";
            setSidebar(true);
        }
    }

    const logOut = async () => {
        try {
            await axios.delete("api/user/logout");
            console.log("Successfully logged out.")
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section id="plant-directory">
            <div className="sidebar">
                <ul>
                    <FontAwesomeIcon icon="arrow-left" id="small-arrow" onClick={showSideBar}/>
                    <li><Link to={"/myplants"}>My Plants</Link></li>
                    <li onClick={logOut}>Log Out</li>
                </ul>
            </div>

            <nav className="is-flex is-justify-content-space-evenly" id="navbar">
                <FontAwesomeIcon icon="bars" size="2x" id="burger" onClick={showSideBar}/>
                <p>Plant Directory</p>
            </nav>

            <div className="all-plants">
                {
                    plantArray.map(plant => 
                        <Link to={`/plant/${plant.plant_id}`} key={plant.plant_id}><GridImage key={plant.plant_id} image={`/images/${plant.image}`} name={plant.title}/></Link>
                        )
                }
            </div>

        </section>
    )
}