
export const TotalExpenseIncome = () => {
    return (
      <nav className="h-1/4 my-4">
        <div className="mx-auto flex flex-col sm:flex-row justify-between items-center h-full max-w-5xl space-y-4 sm:space-y-0">
          <div className="text-center bg-white shadow-md w-full sm:w-1/2 lg:w-1/3 mx-4 p-6 rounded-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
            <p className="font-bold text-gray-700 mb-2">Capital One Balance</p>
            <p className="text-xl font-semibold text-green-500">$10,000</p>
         </div>
          <div className="text-center bg-white shadow-md w-full sm:w-1/2 lg:w-1/3 mx-4 p-6 rounded-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
            <p className="font-bold text-gray-700 mb-2">America First Balance</p>
           <p className="text-xl font-semibold text-green-500">$10,000</p>
          </div>
          <div className="text-center bg-white shadow-md w-full sm:w-1/2 lg:w-1/3 mx-4 p-6 rounded-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
           <p className="font-bold text-gray-700 mb-2">Coinbase Balance</p>
            <p className="text-xl font-semibold text-green-500">$10,000</p>
          </div>
        </div>
      </nav>
    );
  };

 