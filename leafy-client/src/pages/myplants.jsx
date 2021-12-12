import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { GridImage } from '../components/grid-image';

export function MyPlants() {
    const [sidebar, setSidebar] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    
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
                <div className="field has-addons">
                    <p className="control">
                        <input className="input" type="text" placeholder="Search Plants"></input>
                    </p>
                    <p className="control">
                        <button className="button">
                            Search
                        </button>
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