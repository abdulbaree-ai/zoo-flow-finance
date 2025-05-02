
import { useEffect } from 'react';
import Layout from '../components/Layout';
import BalanceSummaryCard from '../components/BalanceSummaryCard';
import ActionButtons from '../components/ActionButtons';
import TransactionsList from '../components/TransactionsList';
import { balanceSummary, transactions, currentUser } from '../data/mockData';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Zoo Finance - Dashboard';
  }, []);

  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Zoo Flow Finance</h1>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={currentUser.avatar} alt={currentUser.name} className="w-full h-full object-cover" />
        </div>
      </div>

      <BalanceSummaryCard data={balanceSummary} />
      <ActionButtons />
      <TransactionsList transactions={transactions.slice(0, 5)} />
    </Layout>
  );
};

export default Dashboard;
