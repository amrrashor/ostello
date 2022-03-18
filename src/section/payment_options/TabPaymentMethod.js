import React, {useState} from "react";

//data for both of tabs and input fields.
import Data from './data'

//style
import "./style.css";

const TabPaymentMethod = () => {

    //the state and function for handling the active tab and it's contents
    const [active, setActive] = useState(1);
    const handleActive = (id) => {
        if (id !== active && id !== null) {
            setActive(id)
        }
    }

    return (
        //first column of payment options
        <div className="hidden md:grid md:grid-cols-12 gap-5">
            <div className="md:col-span-4">
                {Data.map(d => (
                    <div onClick={() => handleActive(d.id)}  className={ d.id === active ? "card flex p-4 my-4 rounded-2xl shadow-xl cursor-pointer text-white bg-purple-700 border-2 border-purple-700" : "card flex p-4 my-4 rounded-2xl shadow-xl cursor-pointer hover:text-white hover:bg-purple-700 text-black duration-500 border-2 border-purple-300"}>
                        <div className={d.id === active ? "icon w-11 text-xl mt-1 text-white" : "icon w-11 text-xl text-purple-700  mt-1"}>{d.icon}</div>
                        <div className="ml-5 md:text-sm lg:text-base font-medium">{d.title}</div>
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

export default TabPaymentMethod