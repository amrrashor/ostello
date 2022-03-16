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
        <div className="grid md:grid-cols-12">
            <div className="md:col-span-4">
                {Data.map(d => (
                    <div onClick={() => handleActive(d.id)}  className={ d.id === active ? "flex px-5 py-5 my-4 rounded-2xl shadow-xl cursor-pointer text-white bg-purple-700 hover:bg-purple-700" : "flex px-5 py-5 my-4 rounded-2xl shadow-xl cursor-pointer hover:text-white text-purple-500 hover:bg-purple-700 duration-500"}>
                        <div className="w-11 text-2xl  mt-1">{d.icon}</div>
                        <div className="ml-8 text-xl">{d.title}</div>
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