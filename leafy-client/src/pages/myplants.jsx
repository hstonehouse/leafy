import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router-dom";
import GridImage from '../components/grid-image'
import axios from "axios";


export function MyPlants() {
    const [sidebar, setSidebar] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [noPlant, setNoPlantBoolean] = useState(false);
    const navigate = useNavigate();
    
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
        setSearchQuery(event.target.value);
    }

    const searchForPlant = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.get(`/api/plantsearch?plant=${searchQuery}`);
            console.log("Search complete", res.data[0]);
            navigate(`/plant/${res.data[0].plant_id}`)
        } catch (error) {
            setNoPlantBoolean(true);
            console.log("Search failed.");
        }
    }

    return (
        <section id="my-plants">
            <div className="sidebar">
                <ul>
                    <FontAwesomeIcon icon="arrow-left" id="small-arrow" onClick={showSideBar}/>
                    <li><a>Plant Directory</a></li>
                    <li><a>Log Out</a></li>
                </ul>
                
            </div>
            <nav className="is-flex is-justify-content-space-around" id="navbar">
                <FontAwesomeIcon icon="bars" size="2x" id="burger" onClick={showSideBar}/>
                <p>My Plants</p>
                <FontAwesomeIcon icon="plus-square" size="2x" id="add" onClick={showSearchBar}/>
            </nav>

            <div className="level-item" id="searchbar">
                {
                    noPlant ? <p className="has-text-danger">Plant not found. Please try again</p> : <br />
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
            
            <p>Click + to add your first plant.</p>

            {/* <div className="all-plants">
                <GridImage image={satinPothos} name="Satin Pothos"/>
                <GridImage image={devilsivy} name="Devil's Ivy"/>
                <GridImage image={begonia} name="Begonia Maculata"/>
            </div> */}

        </section>
    )
}