
import { Transaction, User, BalanceSummary } from '../types';

// Mock current user
export const currentUser: User = {
  id: 'u1',
  name: 'Jane Smith',
  email: 'jane.smith@wildlifeexperience.com',
  role: 'admin',
  avatar: 'https://i.pravatar.cc/150?img=5'
};

// Mock transactions
export const transactions: Transaction[] = [
  {
    id: 't1',
    amount: 1250.00,
    type: 'ticket_sale',
    description: 'Weekend tickets batch',
    date: '2025-05-02T10:30:00',
    createdBy: 'u1',
  },
  {
    id: 't2',
    amount: -350.50,
    type: 'feed_expense',
    description: 'Monthly carnivore feed supply',
    date: '2025-05-01T14:20:00',
    createdBy: 'u2',
  },
  {
    id: 't3',
    amount: -1200.00,
    type: 'salary_expense',
    description: 'Staff salary - April',
    date: '2025-04-30T09:15:00',
    createdBy: 'u1',
  },
  {
    id: 't4',
    amount: 420.75,
    type: 'merchandise_sale',
    description: 'Gift shop sales',
    date: '2025-04-30T16:45:00',
    createdBy: 'u3',
  },
  {
    id: 't5',
    amount: -180.25,
    type: 'maintenance_expense',
    description: 'Reptile enclosure repairs',
    date: '2025-04-29T11:20:00',
    createdBy: 'u2',
  },
  {
    id: 't6',
    amount: 950.00,
    type: 'ticket_sale',
    description: 'School group visit',
    date: '2025-04-29T09:30:00',
    createdBy: 'u1',
  },
  {
    id: 't7',
    amount: -320.40,
    type: 'utility_expense',
    description: 'Electricity bill - April',
    date: '2025-04-28T14:00:00',
    createdBy: 'u1',
  }
];

// Mock balance summary
export const balanceSummary: BalanceSummary = {
  totalBalance: 12485.60,
  todaySales: 1250.00,
  totalExpenses: 2050.15,
  salariesPaid: 1200.00
};
