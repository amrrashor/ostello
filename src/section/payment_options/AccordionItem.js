import React, { useState } from "react";
import { BsChevronDown,BsChevronUp } from 'react-icons/bs';


const AccordionItem = ({ currentvalue }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <div key={currentvalue.id} className="px-5 py-5 my-4  cursor-pointer">
            <div onClick={() => setToggle(!toggle)} className={toggle ? "flex rounded-xl shadow-xl bg-purple-700 p-4 mb-2" : "flex rounded-2xl shadow-xl p-4 mb-2"}>
                <div className={ toggle ? "w-11 text-xl mt-1 text-white" : "w-11 text-xl text-purple-700 mt-1"}>{ currentvalue.icon }</div>
                <h3 className={toggle ? "ml-5 text-white" : "ml-5"}>{currentvalue.title}</h3>
                <span className={toggle ? "mt-1 text-white ml-auto" : "mt-1 ml-auto"}>{toggle ? <BsChevronUp /> : <BsChevronDown />}</span>
            </div>
            {toggle && <p className="rounded-2xl shadow-xl">{currentvalue.input}</p>}
        </div>
    )
}

export default AccordionItem