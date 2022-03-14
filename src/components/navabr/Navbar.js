import React from "react";

const Navbar = () => {
    return (
        <nav className="p-5 shadow-md w-full">
            <div className="w-11/12 flex justify-between items-center md:px-24 sm:px-14">
                <img className="w-40 ml-5" src="/ostello.svg" alt="" />
                <button className="rounded-lg px-5 py-1 font-light capitalize border-2 text-purple-500 hover:text-white hover:bg-purple-500 border-purple-500 border-solid border-opacity-100 duration-500">cancel</button>
            </div>
        </nav>
    )
}

export default Navbar