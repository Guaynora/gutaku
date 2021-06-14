import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../styles/theme";

function Star() {
  return (
    <>
      <div className="star">
        <FontAwesomeIcon icon={faStar} className="star__icon" />
        <FontAwesomeIcon icon={faStar} className="star__icon" />
        <FontAwesomeIcon icon={faStar} className="star__icon" />
        <FontAwesomeIcon icon={faStar} className="star__icon" />
        <FontAwesomeIcon icon={faStar} className="star__icon" />
      </div>
      <style jsx>{`
        .star {
          display: flex;
          justify-content: space-between;
          color: ${colors.secondary};
        }

        .star__icon {
          margin-right: 0.3125rem;
        }

        @media screen and (max-width: 770px) {
          .star__icon {
            margin: 0;
          }
        }
      `}</style>
    </>
  );
}

export default Star;
