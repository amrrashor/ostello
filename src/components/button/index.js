import React from "react";
import './style.css';

const Button = ({content}) => {
    return (
        <button className="font-bold mt-5 bg-color-one text-white hover:bg-white border-purple-500 border w-full p-4 text-xl radius duration-500">{content}</button>
    )
}

export default Button