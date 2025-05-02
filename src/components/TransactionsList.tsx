
import { useState } from 'react';
import { Transaction } from '../types';
import TransactionCard from './TransactionCard';

interface TransactionsListProps {
  transactions: Transaction[];
  title?: string;
}

const TransactionsList = ({ transactions, title = "Transactions" }: TransactionsListProps) => {
  const [filter, setFilter] = useState<'all' | 'income' | 'expense'>('all');

  const filteredTransactions = transactions.filter(transaction => {
    if (filter === 'income') return transaction.amount > 0;
    if (filter === 'expense') return transaction.amount < 0;
    return true;
  });

  return (
    <div className="zoo-card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg">{title}</h2>
        <div className="text-sm flex">
          <button 
            onClick={() => setFilter('all')}
            className={`px-2 ${filter === 'all' ? 'text-zoo-purple font-medium' : 'text-muted-foreground'}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('income')}
            className={`px-2 ${filter === 'income' ? 'text-zoo-green font-medium' : 'text-muted-foreground'}`}
          >
            Income
          </button>
          <button 
            onClick={() => setFilter('expense')}
            className={`px-2 ${filter === 'expense' ? 'text-zoo-red font-medium' : 'text-muted-foreground'}`}
          >
            Expenses
          </button>
        </div>
      </div>
      
      <div>
        {filteredTransactions.length === 0 ? (
          <p className="text-center py-4 text-muted-foreground">No transactions found</p>
        ) : (
          filteredTransactions.map(transaction => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))
        )}
      </div>
      
      {transactions.length > 5 && (
        <div className="text-center mt-4">
          <button className="text-zoo-purple font-medium text-sm">See All</button>
        </div>
      )}
    </div>
  );
};

export default TransactionsList;
