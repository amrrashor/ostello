import React from "react";
import Data from './data'
import './style.css';

const EmiOptions = () => {
    return (
        <div className="shadow-2 rounded-3xl p-9 md:h-screen">
            {Data.map(d => (
                <div>

                    <div>
                        <h3 className="font-color-one my-7 text-xl font-medium">No Cost EMI</h3>
                            {d.NoCostEmi.map(dc => (
                                <div key={dc.id} className=" justify-between w-full p-5 rounded-lg border border-gray-300 my-3">
                                    <div className="text-lg font-normal font-color-one">{dc.duration}  </div>
                                    <div className="font-color-one text-2xl font-bold">{ dc.amount} <span className="font-normal per text-lg">{dc.per}</span></div>
                                </div>
                            ))}
                    </div>

                    <div>
                        <h3 className="font-color-one my-7 text-xl font-medium">EMI with interest</h3>
                            {d.EmiWithInterest.map(da => (
                                <div key={da.id} className="justify-between w-full p-5 rounded-lg border border-gray-300 my-3">
                                    <div className="text-lg font-normal font-color-one">{da.duration} </div>
                                    <div className="font-color-one text-2xl font-bold">{da.amount} <span className="font-normal per text-lg">{da.per}</span></div>
                                    <div className="tetx-lg per font-medium text-right">{ da.rate }</div>
                                </div>
                            ))}
                    </div>

                </div>
            ))}
        </div>
    )
}

export default EmiOptions