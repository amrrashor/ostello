import React from "react";
import Data from './data';

const StatusCard = () => {
    return (
        <div className="w-full mt-6 rounded-2xl shadow-xl px-7 py-4">
            {Data.map(d => (
                <div className="flex justify-between" key={d.id}>
                    <div className={d.id === 4 ? "text-purple-800" : "text-gray-600 mt-1" && d.id === 5 ? "text-red-600" : "text-gray-600 mt-1" && d.id === 6 ? "text-2xl mt-5" : "mt-1" }>{d.title }</div>
                    <div className={d.id === 4 ? "text-purple-800" : "text-gray-600 mt-1" && d.id === 5 ? "text-red-600" : "text-gray-600 mt-1" && d.id === 6 ? "text-2xl mt-5" : "mt-1" }>{d.icon}{d.price}</div>
                </div>
            ))}
        </div>
    )
}

export default StatusCard