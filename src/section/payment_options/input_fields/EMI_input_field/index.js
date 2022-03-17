import React from "react";
import Data from './data';

const EmiInput = () => {
    return (
        <div className="rounded-2xl shadow-xl pt-9 px-9 pb-9 overflow-y-scroll h-screen">
                {Data.map(d => (
                    <div>
                        <div>
                            <h3 className="text-gray-800 my-7 text-base">Debit Card EMI</h3>
                            {d.DebitCardEmi.map(dc => (
                                    <div key={dc.id} className={ dc.active === false ? "select-none flex justify-between w-full p-5 rounded-lg border border-gray-300 my-3" : "flex justify-between w-full p-5 rounded-lg border border-gray-300 my-3"}>
                                        <div className={dc.active === false ? "text-base text-gray-400" : "text-base"}>{dc.title }</div>
                                        <div className={dc.active === false ? "text-gray-400 bg-gray-100 uppercase text-sm  p-2" : "uppercase text-sm text-green-600 bg-green-100 p-2"}>{dc.cost }</div>
                                    </div>
                            ))}
                        </div>

                        <div>
                            <h3 className="text-gray-800 my-7 text-base">Cardless EMI</h3>
                            {d.CardLessEmi.map(cl => (
                                <div key={cl.id} className={ cl.active === false ? "select-none flex justify-between w-full p-5 rounded-lg border border-gray-300 my-3" : "flex justify-between w-full p-5 rounded-lg border border-gray-300 my-3"}>
                                    <div className={cl.active === false ? "text-base text-gray-400" : "text-base"}>{cl.title }</div>
                                    <div className={cl.active === false ? "text-gray-400 bg-gray-100 uppercase text-sm  p-2" : "uppercase text-sm text-green-600 bg-green-100 p-2"}>{cl.cost }</div>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h3 className="text-gray-800 my-7 text-base">Credit Card EMI</h3>
                            {d.CreditCardEmi.map(cc => (
                                <div key={cc.id} className={ cc.active === false ? "select-none flex justify-between w-full p-5 rounded-lg border border-gray-300 my-3" : "flex justify-between w-full p-5 rounded-lg border border-gray-300 my-3"}>
                                    <div className={cc.active === false ? "text-base text-gray-400" : "text-base"}>{cc.title }</div>
                                    <div className={cc.active === false ? "text-gray-400 bg-gray-100 uppercase text-sm  p-2" : "uppercase text-sm text-green-600 bg-green-100 p-2"}>{cc.cost }</div>
                                </div>
                            ))}
                        </div>
                    </div> 
                ))}
        </div>
    )
}

export default EmiInput