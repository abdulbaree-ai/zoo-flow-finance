
import { Ticket } from 'lucide-react';
import { Transaction } from '../types';
import { formatCurrency, getRelativeTime } from '../utils/helpers';

interface TransactionCardProps {
  transaction: Transaction;
}

const TransactionCard = ({ transaction }: TransactionCardProps) => {
  const isIncome = transaction.amount > 0;
  
  let icon = <Ticket size={20} />;
  let bgColor = "bg-green-100";
  
  if (transaction.type === 'feed_expense') {
    bgColor = "bg-amber-100";
  } else if (transaction.type === 'maintenance_expense') {
    bgColor = "bg-blue-100";
  } else if (transaction.type === 'salary_expense') {
    bgColor = "bg-purple-100";
  } else if (transaction.type.includes('expense')) {
    bgColor = "bg-red-100";
  }
  
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 animate-fade-in">
      <div className="flex items-center">
        <div className={`${bgColor} p-2 rounded-full mr-3`}>
          {icon}
        </div>
        <div>
          <h3 className="font-medium">{transaction.description}</h3>
          <p className="text-xs text-muted-foreground">{getRelativeTime(transaction.date)}</p>
        </div>
      </div>
      <div className={`font-semibold ${isIncome ? 'text-zoo-green' : 'text-zoo-red'}`}>
        {isIncome ? '+' : ''}{formatCurrency(transaction.amount)}
      </div>
    </div>
  );
};

export default TransactionCard;
