import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../styles/theme";

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
            <div className="dropdown-list__item" name="especial">
              Nothing
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .dropdown {
          width: 7.5rem;
          position: relative;
          margin: 0 7.5rem;
          z-index: 50;
        }

        .dropdown-select {
          padding: 1em;
          border-radius: 4px;
          background: ${colors.white};
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1em;
          cursor: pointer;
        }

        .dropdown-select:hover {
          background-color: ${colors.secondary};
          color: ${colors.white};
          transition: all 0.2s ease-in-out;
        }

        .dropdown-list {
          border-radius: 4px;
          background: ${colors.white};
          position: absolute;
          top: 110%;
          left: 0;
          right: 0;
          opacity: 1;
          visibility: visible;
          transition: opacity 0.2s linear, visibility 0.2s linear;
          z-index: 20;
        }

        .dropdown-list__item {
          padding: 1em;
          font-size: 1em;
        }

        .dropdown-list__item:hover {
          background-color: ${colors.secondary};
          color: ${colors.white};
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }

        @media (max-width: 430px) {
          .dropdown {
            font-size: 12px;
            margin: 0 auto;
          }
        }
      `}</style>
    </>
  );
}

export default Filter;
