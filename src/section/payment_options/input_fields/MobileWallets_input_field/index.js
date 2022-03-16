import React from "react";
import { HiOutlineLockClosed } from 'react-icons/hi';
import Data from './data';

const MobileWalletField = () => {
    return (
        <div className="rounded-2xl shadow-xl text-gray-600 pt-9 px-9 pb-36">
            <h4>In order to complete your transaction, we will transfer you over to Adyen’s secure servers.</h4>
            <h4 className="mt-7 mb-9">Select your wallet from the drop-down below and proceed towards your payment.</h4>

            <select id="banks" className="px-14 py-4 border border-gray-400 rounded-lg">
                {Data.map(d => (
                    <option  key={d.id} value={d.title}>{d.title }</option>
                ))}
            </select>
            
            <div className="flex justify-end mt-9 text-7xl text-gray-400 pr-14">
                <HiOutlineLockClosed />
                <div className="text-xl w-12">secure connection</div>
            </div>
        </div>
    )
}

export default MobileWalletField