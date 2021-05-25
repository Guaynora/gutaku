import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";


function Filter() {
    return (
        <div className="dropdown" >
            <div className="dropdown-select" >
                <span className="select" > Select top</span>
                <FontAwesomeIcon icon={faCaretDown} size="2x" />
            </div>
            <div className="dropdown-list" >
                <div className="dropdown-list__item" >Airing</div>
                <div className="dropdown-list__item" >Airing</div>
                <div className="dropdown-list__item" >Airing</div>
            </div>
        </div>
    )
}

export default Filter
