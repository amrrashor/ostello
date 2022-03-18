import React from "react";
import Button from '../../../components/button/index';
import './style.css';

const PaymentButton = ({total, content}) => {
    return (
        <div className="payment-btn flex items-center sticky bottom-0 p-3 md:p-0 mt-5 md:mt-2 md:static w-full mx-0 ">
            <div className="mt-5 flex md:hidden flex-col mr-5 font-color-one capitalize">total <div className="font-medium text-lg">{total}</div> </div>
            <Button content={content} className="radius" />
        </div>
    )
}

export default PaymentButton