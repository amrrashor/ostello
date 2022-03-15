import React from "react";

const RedeemCard = () => {
    return (
        <div className="flex mt-6 rounded-2xl shadow-xl text-gray-600 px-7 py-4">
            <input type="text" placeholder="Type referral code here" className="w-11/12 py-1 px-3 rounded-xl border border-dashed border-yellow-500 bg-yellow-50" />
            <button className="py-1 px-3 text-green-600 border border-green-600 rounded-xl ml-4">Redeem</button>
        </div>

    )
}

export default RedeemCard