import React from "react";

import CouponCard from "./coupon_card";
import MoneyDetails from "./money_details";
import XyzCard from "./product_details";
import Referral from "./referral_code";
import './style.css'
const PaymentDetails = () => {
    return (
        <div>
            <h3 className="my-2 font-bold font-color-one capitalize md:hidden">order details</h3>
            <XyzCard />
            <Referral />
            <CouponCard />
            <MoneyDetails />
        </div>
    )
}

export default PaymentDetails