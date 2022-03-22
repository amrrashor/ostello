import React,{useState} from "react";
import { BsChevronDown } from 'react-icons/bs';

import PaymentCard from '../../../../components/paymentCard/index'
import SecureConnection from "../../../../components/secure_connection";
import Data from './data';
import { Dropdown, Option } from "../../../../components/dropdown/Dropdown";
import './style.css';

const MobileWalletField = () => {
    const [open, isOpen] = useState(false);

    return (
        <PaymentCard className="text-gray-600">
            <h4>In order to complete your transaction, we will transfer you over to Adyen’s secure servers.</h4>
            <h4 className="mt-7 mb-9">Select your wallet from the drop-down below and proceed towards your payment.</h4>
            

            <div className="relative w-full md:w-6/12 ">
                <div className="absolute top-5 right-4"><BsChevronDown className={open ? "-rotate-180" : ""} /></div>
                <Dropdown onClick={() => isOpen(!open)} name="wallet" className="select px-8 py-4 appearance-none w-full rounded-2xl">
                    {Data.map(d => (
                        <Option key={d.id} className="select">{d.title}</Option>
                    ))}
                </Dropdown>
            </div>
            <SecureConnection />
        </PaymentCard>
    )
}

export default MobileWalletField