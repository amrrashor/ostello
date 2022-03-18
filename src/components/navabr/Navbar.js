import React from "react";
import './style.css';

const Navbar = () => {
    return (
        <nav id="nav" className="nav-bg p-4 w-full shadow-md">
            <div className="w-full mx-auto flex justify-between items-center md:px-24 sm:px-14">
                <img className="w-40 ml-5" src="assets/ostello.svg" alt="ostelloc" />
                <button className="nav-btn rounded-lg ml- px-5 py-1 font-light capitalize  font-color-two hover:text-white duration-300">cancel</button>
            </div>
        </nav>
    )
}

export default Navbar