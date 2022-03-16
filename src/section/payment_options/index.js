import React from "react";
import { useState } from "react";

//data for both of tabs and input fields.
import Data from './data'

const PaymentMethod = () => {

    //the state and function for handling the active tab and it's contents
    const [active, setActive] = useState(1);
    const handleActive = (id) => {
        if (id !== active && id !== null) {
            setActive(id)
        }
    }

    return (
        //first column of payment options
        <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4">
                {Data.map(d => (
                    <div onClick={() => handleActive(d.id)}  className={ d.id === active ? "flex px-5 py-5 my-4 rounded-2xl shadow-xl cursor-pointer text-white bg-purple-700 border-2 border-purple-700" : "flex px-5 py-5 my-4 rounded-2xl shadow-xl cursor-pointer hover:text-white hover:bg-purple-700 text-black duration-500 border-2 border-purple-300"}>
                        <div className={d.id === active ? "w-11 text-xl mt-1" : "w-11 text-2xl  mt-1 hover:text-white"}>{d.icon}</div>
                        <div className="ml-5 md:text-2xl text-xl font-medium">{d.title}</div>
                    </div>
                ))}
            </div>

        {/* second column which includes various input fields*/}
            <div className='md:col-span-8'>
                {Data.map(d => (
                    <div key={d.id} active={active === d.id} className={d.id === active ? "block" : "hidden"}>
                        {d.input}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PaymentMethod