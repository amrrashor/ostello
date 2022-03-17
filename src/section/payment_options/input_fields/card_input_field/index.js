import React from "react";
import PaymentCard from "../../../../components/paymentCard";
import SecureConnection from "../../../../components/secure_connection";

const CardInputField = () => {
    return (
        <PaymentCard>
            <div className="text-gray-700 mb-4">Name on card</div>
            <input type="text" placeholder="Name on card" className="rounded-2xl p-6 w-full bg-gray-100" />

            <div className="text-gray-700 mt-9 mb-4">Card Number</div>
            <input type="number" placeholder="xxxx xxxx xxxx xxxx" className="rounded-2xl p-6 w-full bg-gray-100" />

            <div className="flex">
                <div className="w-full">
                    <div className="text-gray-700 mt-9 mb-4">Expiry Date</div>
                    <input type="text" placeholder="MM/YY" className="rounded-2xl p-6 w-full bg-gray-100" />
                </div>
                <div className="w-full">
                    <div className="text-gray-700 mt-9 mb-4">Security Code</div>
                    <input type="password" placeholder="CVV/CVC" className="rounded-2xl p-6 w-full bg-gray-100 ml-2" />
                </div>
            </div>

            <input type="checkbox" className="mr-3 mt-9 w-5 h-5" />
            <span for="checkbox" className=" text-gray-700">Remember this card</span>

            <SecureConnection />
        </PaymentCard>
    )
}

export default CardInputField