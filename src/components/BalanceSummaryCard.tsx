
import { BalanceSummary } from '../types';
import { formatCurrency } from '../utils/helpers';

interface BalanceSummaryCardProps {
  data: BalanceSummary;
}

const BalanceSummaryCard = ({ data }: BalanceSummaryCardProps) => {
  return (
    <div className="zoo-card mb-5">
      <div className="flex flex-col">
        <div className="mb-4">
          <span className="text-sm text-muted-foreground">Zoo Balance</span>
          <h2 className="text-3xl font-bold">{formatCurrency(data.totalBalance)}</h2>
        </div>
        
        <div className="w-full bg-gray-200 h-1 rounded-full mb-4 overflow-hidden">
          <div className="bg-zoo-purple h-1 rounded-full" style={{ width: '70%' }}></div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 p-3 rounded-xl">
            <span className="text-xs text-muted-foreground">Today's Sales</span>
            <p className="font-semibold text-zoo-green text-xl">{formatCurrency(data.todaySales)}</p>
          </div>
          
          <div className="bg-red-50 p-3 rounded-xl">
            <span className="text-xs text-muted-foreground">Total Expenses</span>
            <p className="font-semibold text-zoo-red text-xl">{formatCurrency(data.totalExpenses)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceSummaryCard;
