import { useState } from 'react';

export const TotalExpenseIncome = () => {

    const [activeIndex, setActiveIndex] = useState(0);
  
    const cards = [
      { title: 'Capital One Balance', balance: '$10,000' },
      { title: 'America First Balance', balance: '$10,000' },
      { title: 'Coinbase Balance', balance: '$10,000' },
    ];
  
    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };
  
    const handlePrev = () => {
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
      );
    };
  
    return (
      <nav className="h-1/4 my-4">
        <div className="mx-auto flex flex-col sm:flex-row justify-center items-center h-full space-y-4 sm:space-y-0">
          {/* Button Controls on Small Screens */}
          <div className="flex sm:hidden space-x-4 mb-4">
            <button
              onClick={handlePrev}
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
            >
              &gt;
            </button>
          </div>

          {/* Cards: Display Stacked on Small Screens, Side-by-Side on Large Screens */}
          <div className="mx-4 p-6">
            {/* Mobile Stacked Cards with Navigation */}
            <div className="sm:hidden">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`text-center bg-white shadow-md w-full p-6 rounded-lg border border-gray-200 absolute top-0 left-0 w-full ${
                    index === activeIndex ? 'z-10' : 'z-0 opacity-50'
                  }`}
                  style={{
                    transform: `translateY(${(index - activeIndex) * 20}px)`,
                    transition: 'transform 0.3s ease-in-out',
                  }}
                >
                  <p className="font-bold text-gray-700 mb-2">{card.title}</p>
                  <p className="text-xl font-semibold text-green-500">{card.balance}</p>
                </div>
              ))}
            </div>

            {/* Desktop Cards Displayed Side-by-Side */}
            <div className="sm:flex hidden justify-between items-center">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="text-center bg-white shadow-md w-full sm:w-1/2 lg:w-1/3 mx-4 p-6 rounded-lg border border-gray-200"
                >
                  <p className="font-bold text-gray-700 mb-2">{card.title}</p>
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