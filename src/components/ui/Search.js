import React from 'react';
import * as Icon from 'react-feather';
import './search.css';

export const Search = () => {
    return (
        <>
            
            <button 
                className="nav-item nav-link btn_search"
            >
               
                <Icon.Power  strokeWidth= {2.5} size={35} />
               
                <span>  What do you need?  </span>
            </button> 
        </>
    )
}
