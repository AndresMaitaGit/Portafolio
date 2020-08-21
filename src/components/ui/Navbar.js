import React from 'react'
import { Search } from './Search'
import './navbar.css';



export const Navbar = () => {


    return (
        <nav className="navbar navbar-dark navbar-expand-sm mt-3 mx-md-5">
            
            <div className="navbar w-100">
                <div className="navbar-nav">
                
                    <Search />

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 ">
                <ul className="navbar-nav ml-auto">
                <button 
                        className=" about_btn mx-3"
                    >
                        About
                    </button>                
                    <button
                        className=" projects_btn ml-3 mr-5"
                    >
                        Projects
                    </button>
                </ul>
            </div>
        </nav>
    )
}