import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router-dom";

export function PlantPage() {
    const navigate = useNavigate();

    const backToMyPlants = () => {
        navigate("/myplants");
    }

    return (
        <section id="one-plant">
            <FontAwesomeIcon icon="arrow-left" id="small-arrow" onClick={backToMyPlants}/>
            
        </section>
    )
}