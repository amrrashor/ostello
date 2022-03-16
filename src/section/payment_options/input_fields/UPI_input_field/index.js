import React from "react";
import { HiOutlineLockClosed } from 'react-icons/hi';

const UpiInputField = () => {
    return (
        <div className="rounded-2xl shadow-xl text-gray-600 pt-9 px-9 pb-36">
            <h4>In order to complete your transaction, we will transfer you over to Adyen’s secure servers.</h4>
            <div className="flex justify-end mt-9 text-7xl text-gray-400 pr-14">
                <HiOutlineLockClosed />
                <div className="text-xl w-12">secure connection</div>
            </div>
        </div>
    )
}

export default UpiInputField