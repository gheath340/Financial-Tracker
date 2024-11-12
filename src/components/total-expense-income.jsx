import { useState } from 'react';

export const TotalExpenseIncome = () => {

    const [activeIndex, setActiveIndex] = useState(0);
  
    const cards = [
      { title: 'America First Balance', balance: '$10,000' },
      { title: 'Capital One Balance', balance: '$7,000' },
      { title: 'Coinbase Balance', balance: '$5,000' },
    ];
  
    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };
  
    return (
      <nav className="my-4">
        <div className="mx-auto sm:flex justify-center items-center h-full ">
          {/* Cards: Display Stacked on Small Screens, Side-by-Side on Large Screens */}
          <div className="sm:mx-4 sm:p-6">
            {/* Mobile Stacked Cards with Navigation */}
            <div className="relative h-[210px] w-full sm:hidden overflow-hidden">
              {cards.map((card, index) => (
                <button
                  key={index}
                  onClick={handleNext}
                  className={`absolute inset-x-0 mx-auto bg-white shadow-md w-11/12 p-6 rounded-lg border border-gray-200 ${
                    index === activeIndex ? 'z-10 opacity-100' : 'z-0 opacity-50'
                  }`}
                  style={{
                    transform: index >= activeIndex
                      ? `translateY(${(index - activeIndex) * 50}px)` // Normal stacking below
                      : `translateY(${(cards.length + index - activeIndex) * 40}px)`,
                    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease',
                  }}
                  >
                  <p className="font-bold text-gray-700 mb-2">{card.title}</p>
                  <p className="text-xl font-semibold text-green-500 mb-4">{card.balance}</p>
                  {index === activeIndex && (
                    <div className="flex justify-center mt-2">
                      <div className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition transform rotate-90">
                        <div className="w-2 h-2 border-t-2 border-r-2 border-gray-700 transform rotate-45"></div>
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
            {/* Desktop Cards Displayed Side-by-Side */}
            <div className="sm:flex hidden justify-between items-stretch">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="text-center justify-between bg-white shadow-md w-full sm:w-1/2 lg:w-1/3 mx-4 p-6 rounded-lg border border-gray-200"
                >
                  <p className="justify-self-center font-bold text-gray-700 mb-2 w-3/4">{card.title}</p>
                  <p className="text-xl font-semibold text-green-500">{card.balance}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );  
  };

//   <nav className="h-1/4 my-4">
//   <div className="mx-auto flex flex-col sm:flex-row justify-between items-center h-full max-w-5xl space-y-4 sm:space-y-0">
//     <div className="text-center bg-white shadow-md w-full sm:w-1/2 lg:w-1/3 mx-4 p-6 rounded-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
//       <p className="font-bold text-gray-700 mb-2">Capital One Balance</p>
//       <p className="text-xl font-semibold text-green-500">$10,000</p>
//    </div>
//     <div className="text-center bg-white shadow-md w-full sm:w-1/2 lg:w-1/3 mx-4 p-6 rounded-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
//       <p className="font-bold text-gray-700 mb-2">America First Balance</p>
//      <p className="text-xl font-semibold text-green-500">$10,000</p>
//     </div>
//     <div className="text-center bg-white shadow-md w-full sm:w-1/2 lg:w-1/3 mx-4 p-6 rounded-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
//      <p className="font-bold text-gray-700 mb-2">Coinbase Balance</p>
//       <p className="text-xl font-semibold text-green-500">$10,000</p>
//     </div>
//   </div>
// </nav>