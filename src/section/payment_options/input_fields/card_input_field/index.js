import React from "react";

const CardInputField = () => {
    return (
        <form className="rounded-2xl shadow-xl pt-9 px-9 pb-36">
            <div className="text-gray-700 mb-4">Name on card</div>
            <input type="text" placeholder="Name on card" className="rounded-2xl shadow-lg p-6 w-full bg-gray-100" />

            <div className="text-gray-700 mt-9 mb-4">Card Number</div>
            <input type="number" placeholder="xxxx xxxx xxxx xxxx" className="rounded-2xl shadow-lg p-6 w-full bg-gray-100" />

            <div className="flex">
                <div className="w-full">
                    <div className="text-gray-700 mt-9 mb-4">Expiry Date</div>
                    <input type="text" placeholder="MM/YY" className="rounded-2xl shadow-lg p-6 w-full bg-gray-100" />
                </div>
                <div className="w-full">
                    <div className="text-gray-700 mt-9 mb-4">Security Code</div>
                    <input type="password" className="rounded-2xl shadow-lg p-6 w-full bg-gray-100 ml-2" />
                </div>
            </div>

            <input type="checkbox" className="mr-3 mt-9" />
            <label for="checkbox" className="mb-6 text-gray-700">Remember this card</label>
        </form>
    )
}

export default CardInputField