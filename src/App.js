import React from 'react';

import Navbar from './components/navabr/Navbar';
import Card from './components/cards/Index';
import InputField from './components/input/Index';
import XyzCard from './components/xyz_card';

import './App.css';
import RedeemCard from './components/redeem_card';
import CouponCard from './components/coupon_card';
import StatusCard from './components/statusCard';
import Button from './components/button';
import TabPaymentMethod from './section/payment_options/TabPaymentMethod';
import AccordPaymentMethod from './section/payment_options/AccordionPaymentMethod';

function App() {
  return (
    <div className='mb-8 '>
      <Navbar />
      <div className='max-w-full w-11/12 mx-auto container pt-16'>
        <h2 className='text-3xl capitalize font-medium text-gray-700 font-semibold'>choose a payment method</h2>

        <div className='grid gap-6 md:grid-cols-12'>
          <div className='md:col-span-12 lg:col-span-8'>
            <TabPaymentMethod />
            <AccordPaymentMethod />
          </div>

          <div className='md:col-span-12 lg:col-span-4'>
            <XyzCard />
            <RedeemCard />
            <CouponCard />
            <StatusCard />
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
