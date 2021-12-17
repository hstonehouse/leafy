import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate, Link } from "react-router-dom";
import { GridImage } from '../components/grid-image'
import axios from "axios";

export function MyPlants() {
    const [sidebar, setSidebar] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchNotFound, setSearchNotFoundBoolean] = useState(false);
    const [plantArray, setPlantArray] = useState([]);
    const [noPlant, setNoPlantBoolean] = useState(false);
    const navigate = useNavigate();

    useEffect( () => {
        async function fetchData() {
            try { 
                const response = await axios.get("/api/user");
                const plant_ids = response.data.plants;
                // an array of promises
                const promises = plant_ids.map(plant_id => axios.get(`/api/plantsearch/${plant_id}`));
                // turns that array of promises into one single promise
                const plants = await Promise.all(promises);
                setPlantArray(plants);
                if (plants.length === 0) {
                    setNoPlantBoolean(true);
                }
            } catch (err) {
                navigate("/");
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

    const showSearchBar = () => {
        const searchbarDiv = document.querySelector("#searchbar");
        if (searchBar) {
            searchbarDiv.style.display = " ";
            searchbarDiv.style.display = "none";
            setSearchBar(false);
        } else {
            searchbarDiv.style.display = " ";
            searchbarDiv.style.display = "flex";
            setSearchBar(true);
        }
    }

    const saveSearchQuery = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
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

    const searchForPlant = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.get(`/api/plantsearch?plant=${searchQuery}`);
            console.log("Search complete", res.data[0]);
            navigate(`/plant/${res.data[0].plant_id}`)
        } catch (error) {
            if (error.response.status === 401) {
                navigate("/");
            } else {
                setSearchNotFoundBoolean(true);
            }
        }
    }

    return (
        <section id="my-plants">
            <div className="sidebar">
                <ul>
                    <FontAwesomeIcon icon="arrow-left" id="small-arrow" onClick={showSideBar}/>
                    <li><Link to={"/plantdirectory"}>Plant Directory</Link></li>
                    <li><a onClick={logOut}>Log Out</a></li>
                </ul>
                
            </div>
            <nav className="is-flex is-justify-content-space-around" id="navbar">
                <FontAwesomeIcon icon="bars" size="2x" id="burger" onClick={showSideBar}/>
                <p>My Plants</p>
                <FontAwesomeIcon icon="plus-square" size="2x" id="add" onClick={showSearchBar}/>
            </nav>

            <div className="level-item" id="searchbar">
                {
                    searchNotFound ? <p className="has-text-danger">Plant not found. Please try again</p> : <br />
                }
                <div className="field has-addons">
                    <p className="control">
                        <input className="input" type="text" placeholder="Search Plants" onChange={saveSearchQuery}></input>
                    </p>
                    <p className="control">
                        <input className="button" type="submit" value="Search" onClick={searchForPlant}></input>
                    </p>
                </div>
            </div>
            
            
            {
                noPlant ? <p>Click + to add your first plant.</p> :

                 <div className="all-plants">
                    {
                        plantArray.map(plant => 
                        <Link to={`/plant/${plant.data[0].plant_id}`} key={plant.data[0].plant_id}><GridImage key={plant.data[0].plant_id} image={`/images/${plant.data[0].image}`} name={plant.data[0].title}/></Link>)
                    }
                 </div> 
            }
           
        </section>
    )
}