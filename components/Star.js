import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Star() {
    return (
        <div className="star" >
            <FontAwesomeIcon icon={faStar} className="star__icon" />
            <FontAwesomeIcon icon={faStar} className="star__icon" />
            <FontAwesomeIcon icon={faStar} className="star__icon" />
            <FontAwesomeIcon icon={faStar} className="star__icon" />
            <FontAwesomeIcon icon={faStar} className="star__icon" />
        </div>
    )
}

export default Star
