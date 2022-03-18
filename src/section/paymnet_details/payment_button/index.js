import React from "react";

import Button from '../../../components/button/index';
import './style.css'
const PaymentButton = ({total, content}) => {
    return (
        <div className="payment-btn flex items-center sticky -bottom-0 shadow p-3 mt-5 md:static mb-0 w-full">
            <div className="mt-5 flex md:hidden flex-col mr-5 font-color-one capitalize">total <div className="font-medium text-lg">{total}</div> </div>
            <Button content={content} className="shadow radius" />
        </div>
    )
}

export default PaymentButton