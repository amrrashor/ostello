import React from "react";

const PaymentCard = ({children}) => {
    return (
        <div className="text-gray-600 rounded-2xl shadow-xl pt-9 px-9 pb-28 h-screen">
            {children}
        </div>
    )
}

export default PaymentCard