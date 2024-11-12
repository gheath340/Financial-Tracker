export const Transactions = () => {
  // Sample data for transactions
  const transactions = [
    { title: 'Groceries', cost: 50.25 },
    { title: 'Gas', cost: 30.00 },
    { title: 'Electric Bill', cost: 120.75 },
    { title: 'Internet', cost: 60.00 },
    { title: 'Dining Out', cost: 40.50 },
  ];

  return (
    <nav className="bg-white shadow-md border border-gray-200 flex-1 w-full h-full p-4 rounded-lg mx-auto">
      <div className="container mx-auto">
        <div className="text-black text-xl font-bold mb-4">Transactions</div>

        {/* Transaction List */}
        <ul>
          {transactions.map((transaction, index) => (
            <li
              key={index}
              className={`flex justify-between items-center py-3 ${index < transactions.length - 1 ? 'border-b border-gray-300' : ''}`}
            >
              <span className="text-gray-800 font-medium">{transaction.title}</span>
              <span className="text-green-500 font-semibold">${transaction.cost.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>

  );
};