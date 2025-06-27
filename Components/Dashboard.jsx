
import React from 'react';
import Header from './Header';
import Myinfo from './Myinfo';
import Footer from './Footer';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col px-4">
      <Header />
      <Myinfo />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
