import React from 'react';

const transactions = [
  {
    type: 'Airtime',
    description: 'MTN Airtime purchase of N103 for phone number 08035289133',
    ref: '69911726746188',
    amount: 'N100.94',
    date: '19/09/2024',
    icon: '📞',
  },
  {
    type: 'Data',
    description:
      'MTN 08035289133: Dear Customer, You have successfully shared 2GB Data to 2348035289133. Your SME data balance is 31638.15GB expires 26/10/2024. Thank you',
    ref: '84321726746142',
    amount: 'N532',
    date: '19/09/2024',
    icon: '📶',
  },
  {
    type: 'Wallet Topup',
    description:
      'Wallet funding of NG600 via Monnify bank transfer with a service charge of 1%. Your wallet has been credited with 594.',
    ref: 'MNFY99|20240919111859312638',
    amount: 'N594',
    date: '19/09/2024',
    icon: '💳',
  },
];

const TransactionHistory = () => {
  return (
    <div className="flex flex-col h-full max-h-screen px-4 py-4">
      {/* Container for transaction history */}
      <div className="bg-white p-4 rounded-lg shadow-md flex-1 flex flex-col overflow-hidden">
        <h1 className="text-xl font-bold mb-3">Transactions</h1>
        <p className="text-sm text-gray-600 mb-4">
          Your last 100 transactions.{' '}
          <span className="text-red-500">Click on the transaction to view details.</span>
        </p>

        {/* Search Section */}
        <div className="flex flex-col space-y-2 mb-4">
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search for transactions..."
          />
          <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600">
            Search
          </button>
        </div>

        {/* Transaction List with scrollable area */}
        <div className="flex-1 overflow-y-auto max-h-[60vh] space-y-4">
          {transactions.map((transaction, index) => (
            <div
              key={index}
              className="bg-gray-100 p-3 rounded-lg flex items-center space-x-3 shadow-sm"
            >
              <span className="text-3xl">{transaction.icon}</span>
              <div className="flex-1">
                <p className="font-semibold text-base">{transaction.type}</p>
                <p className="text-sm text-gray-600">{transaction.description}</p>
                <p className="text-xs text-gray-500">Ref: {transaction.ref}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">{transaction.amount}</p>
                <p className="text-xs text-gray-500">{transaction.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;