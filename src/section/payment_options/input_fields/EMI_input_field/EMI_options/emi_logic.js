import React, {useState} from "react";
import './style.css';

const EmiOptions = ({currentValue, handleActive}) => {
    const [toggle, setToggle] = useState(false);

    return (
                    <div className="justify-between w-full p-5 rounded-lg border border-gray-300 my-3">
                        <div onClick={() => setToggle(!toggle)} key={currentValue.id} className="cursor-pointer justify-between my-3">
                            <div className="text-lg font-normal font-color-one">{currentValue.duration}  </div>
                            <div className="font-color-one text-2xl font-bold">{currentValue.amount} <span className="font-normal per text-lg">{currentValue.per}</span></div>
                            <div className={toggle ? "divider" : "hidden"}></div>
                        </div>
                        {toggle && <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-base font-medium regular my-1">{currentValue.one }</div>
                                    <div className="text-base font-medium regular my-1">{currentValue.two }</div>
                                    <div className="font-color-two font-medium text-base my-1">{currentValue.three}</div>
                                    <div className="divider"></div>
                                    <div className="font-color-one text-lg font-medium my-1">{currentValue.four }</div>
                                </div>
                                <div>
                                    <div className="text-base font-medium regular my-1">{currentValue.EMIValue}</div>
                                    <div className="text-base font-medium regular my-1">{currentValue.interest}</div>
                                    <div className="font-color-two font-medium text-base my-1">{currentValue.discount}</div>
                                    <div className="divider"></div>
                                    <div className="font-color-one text-lg font-medium my-1">{currentValue.total}</div>
                                </div>
                        </div>}
                    </div>
    )
}

export default EmiOptions