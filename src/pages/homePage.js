import { NavBar } from '../components/navBar'
import { TotalExpenseIncome } from '../components/total-expense-income';
import { Transactions } from '../components/transactions';
import { TotalLineGraph } from '../components/totalLineGraph';

export const HomePage = () => {

  const cards = [
    { title: 'America First Balance', balance: '$10,000' },
    { title: 'Capital One Balance', balance: '$7,000' },
    { title: 'Coinbase Balance', balance: '$5,000' },
  ];
  
  return (
    <>
      <NavBar />
        <div className='flex flex-col lg:flex-row bg-gray-100 min-h-screen p-4'>
          <div className="flex flex-col w-full lg:w-2/3 lg:px-4 space-y-4">
            <TotalExpenseIncome cards={cards}/>
            <TotalLineGraph />
          </div>
          <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
            <Transactions />
          </div>
        </div>
    </>
  );
}