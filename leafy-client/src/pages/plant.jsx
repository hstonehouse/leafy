import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export function PlantPage() {
    const navigate = useNavigate();
    let { id } = useParams();

    const [title, setTitle] = useState(""); // the common name of the plant
    const [name, setName] = useState(""); // the scientific name of the plant
    const [light, setLight] = useState(""); // info on how much light the plant needs
    const [water, setWater] = useState(""); // info on how much water the plant needs
    const [petSafe, setPetSafe] = useState(""); // info on whether or not the plant is pet-safe
    const [plantImage, setPlantImage] = useState("") // the plant image URL

    useEffect( () => {
        async function fetchData() {
            const response = await axios.get(`/api/plantsearch/${id}`);
            setTitle(response.data[0].title);
            setName(response.data[0].name);
            setLight(response.data[0].light);
            setWater(response.data[0].water);
            setPetSafe(response.data[0].pet_safe);
            setPlantImage(response.data[0].image);
        }
        fetchData();
    }, [])

    const backToMyPlants = () => {
        navigate("/myplants");
    }

    const addPlant = async (event) => {
        event.preventDefault();
        try {
            await axios.post(`/api/plantsearch/${id}`);
            console.log("Plant added!");
            navigate("/myplants");
        } catch (error) {
            console.log(error);    
        }
        
    }

    return (
        <section id="one-plant">
            <FontAwesomeIcon icon="arrow-left" size="2x" id="back-arrow" onClick={backToMyPlants}/>
            
            <div className="plant-container">
                <div className="plantsquare">
                    <img src={`/images/${plantImage}`} alt={name} id="single-plant"/>
                    <p className="bottom-left">{title}</p>  
                </div>
            </div>

            <div className="is-flex-direction-column name-container">
                <p className="plant-name">{name}</p>
                <p className="plant-title">{title}</p>
            </div>

            <div className="plant-info">
                <p className="subheading">Light</p>
                <p className="description">{light}</p>
                <p className="subheading">Water</p>
                <p className="description">{water}</p>
                <p className="subheading">Pet safe?</p>
                <p className="description">{petSafe}</p>
            </div>

            <div className="field">
                <div className="control">
                    <input className="button is-rounded" type="submit" value="Add to My Plants" id="add-remove-button" onClick={addPlant}></input>
                </div>
            </div>

        </section>
    )
}