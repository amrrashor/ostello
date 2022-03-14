import React from 'react';
import Navbar from './components/navabr/Navbar';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
        <div className='max-w-full w-10/12 mx-auto container pt-16'>
        <h2 className='text-3xl capitalize font-medium'>choose a payment method</h2>
      </div>
    </>
  );
}

export default App;
