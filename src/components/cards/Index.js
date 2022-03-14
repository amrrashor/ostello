import React from "react";
import Data from './Data';

const Card = () => {
    return (
        <div>
            {Data.map(d => (
                <div className={ d.active === true ? "flex px-5 py-5 my-4 rounded-2xl shadow-xl cursor-pointer text-white bg-purple-500 hover:bg-purple-500" : "flex px-5 py-8 my-4 rounded-2xl shadow-xl cursor-pointer hover:text-white text-purple-500 hover:bg-purple-500 duration-500"}>
                    <div className="w-11 text-2xl  mt-1">{d.icon}</div>
                    <div className="ml-8 text-xl">{d.title}</div>
                </div>
            ))}
        </div>
    )
}

export default Card