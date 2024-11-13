import { useState } from 'react';
import { MobileCards } from './mobileCards';
import { DesktopCards } from './desktopCards';

export const TotalExpenseIncome = ({ cards }) => {

  return (
    <nav className="my-4">
      <div className="mx-auto sm:flex justify-center items-center h-full">
        <div className="sm:mx-4 sm:p-6">
          <MobileCards cards={cards} />
          <DesktopCards cards={cards}/>
        </div>
      </div>
    </nav>
  );  
};