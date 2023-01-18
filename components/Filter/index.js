import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles";

function Filter({ handleFilterClick }) {
  const [option, setOption] = useState("Select Top");
  const [click, setClick] = useState(false);

  const FilterClick = (e) => {
    const topSearch = e.target.textContent;
    setOption(topSearch);
    handleFilterClick(topSearch);
  };

  const handleClick = (e) => {
    setClick(!click);
  };

  return (
    <>
      <div className="dropdown" onClick={handleClick}>
        <div className="dropdown-select">
          <span className="select">
            {option !== "Nothing" ? option : "Select top"}
          </span>
          <FontAwesomeIcon icon={faCaretDown} size="1x" />
        </div>
        {click && (
          <div className="dropdown-list" onClick={FilterClick}>
            <div className="dropdown-list__item" name="airing">
              Airing
            </div>
            <div className="dropdown-list__item" name="upcoming">
              Upcoming
            </div>
            <div className="dropdown-list__item" name="tv">
              Tv
            </div>
            <div className="dropdown-list__item" name="ova">
              Ova
            </div>
            <div className="dropdown-list__item" name="especial">
              Special
            </div>
          </div>
        )}
      </div>
      <style jsx>{styles}</style>
    </>
  );
}

export default Filter;
