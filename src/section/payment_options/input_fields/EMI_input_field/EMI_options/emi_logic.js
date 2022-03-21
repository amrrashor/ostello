import React, {useState} from "react";
import './style.css';

const EmiOptions = ({currentValue, handleActive}) => {
    const [toggle, setToggle] = useState(false);
    console.log(currentValue)
    return (

                    <div>
                        <div onClick={() => setToggle(!toggle)} key={currentValue.id} className=" justify-between w-full p-5 rounded-lg border border-gray-300 my-3">
                            <div className="text-lg font-normal font-color-one">{currentValue.duration}  </div>
                            <div className="font-color-one text-2xl font-bold">{ currentValue.amount} <span className="font-normal per text-lg">{currentValue.per}</span></div>                            
                        </div>
                    {toggle && <div>
                        <button onClick={() => handleActive("CardInputField")}>check</button>
                    </div>}
                    </div>

    )
}

export default EmiOptions