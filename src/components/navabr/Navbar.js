import React from "react";

const Navbar = () => {
    return (
        <nav id="nav" className="nav-bg p-4 w-full shadow-md">
            <div className="w-full mx-auto flex justify-between items-center md:px-24 sm:px-14">
                <img className="w-40 ml-5" src="assets/ostello.svg" alt="ostelloc" />
                <button className="rounded-lg ml- px-5 py-1 font-light capitalize border-2 text-purple-500 hover:text-white hover:bg-purple-500 border-purple-500 border-solid border-opacity-100 duration-500">cancel</button>
            </div>
        </nav>
    )
}

export default Navbar