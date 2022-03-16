import React from "react";
import { useEffect } from "react";


const Navbar = () => {

    useEffect(() => {
        const header = document.getElementById('nav');
        const handleScroll = window.addEventListener("scroll", () => {
            if (window.pageYOffset > 50) {
                header.classList.add("shadow-md");
            } else {
                header.classList.remove("shadow-md")
            }
        });
        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, [])
    return (
        <nav id="nav" className="p-4 w-full bg-white duration-300 sticky -top-0">
            <div className="w-full mx-auto flex justify-between items-center md:px-24 sm:px-14">
                <img className="w-40 ml-5" src="assets/ostello.svg" alt="ostelloc" />
                <button className="rounded-lg ml- px-5 py-1 font-light capitalize border-2 text-purple-500 hover:text-white hover:bg-purple-500 border-purple-500 border-solid border-opacity-100 duration-500">cancel</button>
            </div>
        </nav>
    )
}

export default Navbar