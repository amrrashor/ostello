import React, {useState} from "react";
import Data from './data';

const AccordPaymentMethod = () => {
    const [active, setActive] = useState(false);
    const toggleHandle = () => {
        setActive(!active)
    }
    return (
        <div>
            <div>
                {Data.map(d => (
                    <div key={d.id}>
                        <div onClick={toggleHandle} className={active ? "bg-purple-500 border border-purple-400 cursor-pointer rounded-xl p-4 m-4" : "border border-purple-400 cursor-pointer rounded-xl p-4 m-4"}>title</div>
                        {active && <div>{d.input }</div>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AccordPaymentMethod