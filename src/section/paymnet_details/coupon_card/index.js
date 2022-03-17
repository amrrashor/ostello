import React from "react";
import { RiCoupon3Line } from 'react-icons/ri';
import { BiChevronRight } from 'react-icons/bi';
import PaymentCard from '../../../components/paymentCard/index';

const CouponCard = () => {
    return (
        <PaymentCard className="w-full mt-6 rounded-2xl shadow-xl text-gray-600 px-7 py-4 text-purple-700 bg-gray-300 text-xl font-bold">
            <div className="flex justify-between">
                <div>
                    <RiCoupon3Line className="inline mr-1 mb-1 text-2xl" />Use coupons
                </div>
                <BiChevronRight className="inline mr-1 mt-1 text-2xl" />
            </div>
        </PaymentCard>
    )
}

export default CouponCard