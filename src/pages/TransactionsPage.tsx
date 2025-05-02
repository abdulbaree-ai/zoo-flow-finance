
import { useState } from 'react';
import Layout from '../components/Layout';
import TransactionsList from '../components/TransactionsList';
import { transactions } from '../data/mockData';
import { ChevronDown } from 'lucide-react';

const TransactionsPage = () => {
  const [dateFilter, setDateFilter] = useState<'all' | 'today' | 'week' | 'month'>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filterOptions = [
    { value: 'all', label: 'All Time' },
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' }
  ];

  // Filter transactions based on date
  const getFilteredTransactions = () => {
    if (dateFilter === 'all') return transactions;
    
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    return transactions.filter(transaction => {
      const transactionDate = new Date(transaction.date);
      
      if (dateFilter === 'today') {
        return transactionDate >= today;
      }
      
      if (dateFilter === 'week') {
        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - today.getDay());
        return transactionDate >= weekStart;
      }
      
      if (dateFilter === 'month') {
        const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
        return transactionDate >= monthStart;
      }
      
      return true;
    });
  };

  return (
    <Layout title="Transactions">
      <div className="mb-4 relative">
        <button
          className="flex items-center text-sm bg-white rounded-lg px-3 py-2 border shadow-sm"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <span>Date: {filterOptions.find(o => o.value === dateFilter)?.label}</span>
          <ChevronDown size={16} className="ml-2" />
        </button>
        
        {isFilterOpen && (
          <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border z-10 w-48">
            {filterOptions.map(option => (
              <button
                key={option.value}
                className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                onClick={() => {
                  setDateFilter(option.value as any);
                  setIsFilterOpen(false);
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
      
      <TransactionsList 
        transactions={getFilteredTransactions()} 
        title={`${filterOptions.find(o => o.value === dateFilter)?.label} Transactions`} 
      />
    </Layout>
  );
};

export default TransactionsPage;
