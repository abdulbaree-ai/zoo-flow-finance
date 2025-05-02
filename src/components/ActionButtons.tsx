
import { Link } from 'react-router-dom';
import { Plus, DollarSign, Banknote } from 'lucide-react';

const ActionButtons = () => {
  return (
    <div className="grid grid-cols-3 gap-2 my-5">
      <Link to="/add-transaction?type=income" className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center">
        <div className="bg-green-100 p-2 rounded-full mb-1">
          <Plus size={18} className="text-zoo-green" />
        </div>
        <span className="text-xs font-medium">Add Sale</span>
      </Link>
      
      <Link to="/add-transaction?type=expense" className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center">
        <div className="bg-red-100 p-2 rounded-full mb-1">
          <DollarSign size={18} className="text-zoo-red" />
        </div>
        <span className="text-xs font-medium">Add Expense</span>
      </Link>
      
      <Link to="/add-transaction?type=salary" className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center">
        <div className="bg-purple-100 p-2 rounded-full mb-1">
          <Banknote size={18} className="text-zoo-purple" />
        </div>
        <span className="text-xs font-medium">Pay Salary</span>
      </Link>
    </div>
  );
};

export default ActionButtons;
