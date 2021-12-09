
export function GridImage(props) {
    return (
        <div className="plantsquare">
            <img src={props.image} alt={props.name} id="single-plant"/>
            <p className="bottom-left">{props.name}</p>
        </div>
    )
}