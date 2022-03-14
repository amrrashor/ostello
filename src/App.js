import React from 'react';

import Navbar from './components/navabr/Navbar';
import Card from './components/cards/Index';
import InputField from './components/input/Index';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className='max-w-full w-10/12 mx-auto container pt-16'>
        <h2 className='text-3xl capitalize font-medium text-gray-700 font-semibold'>choose a payment method</h2>
        <div className='grid gap-6 md:grid-cols-12'>
          <div className="md:col-span-3">
            <Card />
          </div>
          <div className='md:col-span-6'>
            <InputField />
          </div>
          <div className='md:col-span-3'>
            hello
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
