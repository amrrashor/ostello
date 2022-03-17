import React, { useState } from "react";

const AccordionItem = ({ currentvalue }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <div key={currentvalue.id} className="px-5 py-5 my-4  cursor-pointer">
            <div>
                <h3 className={toggle ? "rounded-2xl shadow-xl bg-purple-700 p-4 mb-3" : "rounded-2xl shadow-xl p-4 mb-3"} onClick={() => setToggle(!toggle)}>{currentvalue.title}</h3>
                
            </div>
            {toggle && <p className="rounded-2xl shadow-xl">{currentvalue.input}</p>}
        </div>
    )
}

export default AccordionItem