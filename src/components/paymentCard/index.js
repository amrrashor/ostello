import React from "react";

const PaymentCard = ({children}) => {
    return (
        <div className="text-gray-600 rounded-3xl shadow-xl pt-9 px-4 md:px-7 pb-28 md:h-screen">
            {children}
        </div>
    )
}

export default PaymentCard