import React from 'react';
import {
  SalesOverview,
  Earnings,
  Revenue,
  WeeklyStats,
  RecentTransactions,
  Branding,
  Activities,
} from '../components/Ecommerce/';

const Ecommerce = () => {
  return (
    <div className="mt-24">
      <Earnings />
      <Revenue />

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <RecentTransactions />
        <SalesOverview />
      </div>

      <div className="flex flex-wrap justify-center">
        <WeeklyStats />
        <Branding />
        <Activities />
      </div>
    </div>
  );
};

export default Ecommerce;
