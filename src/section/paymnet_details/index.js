import React from "react";

import CouponCard from "./coupon_card";
import MoneyDetails from "./money_details";
import PaymentButton from "./payment_button";
import XyzCard from "./product_details";
import Referral from "./referral_code";
import './style.css'


const PaymentDetails = () => {
    const Rubee = <img src="../../assets/vector.png" />
    return (
        <div className="h-5/6">
            <h3 className="my-2 font-bold font-color-one capitalize md:hidden">order details</h3>
            <XyzCard />
            <Referral />
            <CouponCard />
            <MoneyDetails />
            <PaymentButton total={`33 ${Rubee}`} content="complete payment" />
        </div>
    )
}

export default PaymentDetails