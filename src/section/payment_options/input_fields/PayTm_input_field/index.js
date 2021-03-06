import React from "react";
import { HiOutlineLockClosed } from 'react-icons/hi';
import PaymentCard from "../../../../components/paymentCard";
import SecureConnection from "../../../../components/secure_connection";

const PaytmInputField = () => {
    return (
        <PaymentCard className="">
            <h4>In order to complete your transaction, we will transfer you over to Adyen’s secure servers.</h4>
            <SecureConnection />
        </PaymentCard>
    )
}

export default PaytmInputField