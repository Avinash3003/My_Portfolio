
import React from 'react';
import Header from './Header';
import Myinfo from './Myinfo';
import Footer from './Footer';

function Dashboard() {
  return (
    <div className='bg-gray-200 min-h-screen flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 pt-6 pb-6 w-full overflow-y-scroll overflow-x-hidden box-border'>
      <Header />
      <Myinfo />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
