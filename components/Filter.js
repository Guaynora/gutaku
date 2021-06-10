import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Filter({ handleFilterClick }) {
  const [option, setOption] = useState("Select Top");

  const FilterClick = (e) => {
    const top_search = e.target.textContent;
    setOption(top_search);
    handleFilterClick(top_search);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-select">
        <span className="select"> {option}</span>
        <FontAwesomeIcon icon={faCaretDown} size="1x" />
      </div>
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
          Especial
        </div>
      </div>
    </div>
  );
}

export default Filter;
