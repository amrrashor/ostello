import React from "react";
import PaymentCard from '../../../../components/paymentCard/index'
import SecureConnection from "../../../../components/secure_connection";
import Data from './data';

const MobileWalletField = () => {
    return (
        <PaymentCard className="text-gray-600">
            <h4>In order to complete your transaction, we will transfer you over to Adyen’s secure servers.</h4>
            <h4 className="mt-7 mb-9">Select your wallet from the drop-down below and proceed towards your payment.</h4>

            <select id="banks" className="px-14 py-4 border border-gray-400 rounded-lg">
                {Data.map(d => (
                    <option key={d.id} value={d.title}>{d.title }</option>
                ))}
            </select>
            
            <SecureConnection />
        </PaymentCard>
    )
}

export default MobileWalletField