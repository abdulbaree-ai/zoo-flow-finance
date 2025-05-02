
export type UserRole = 'admin' | 'staff';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export type TransactionType = 
  | 'ticket_sale' 
  | 'food_sale'
  | 'merchandise_sale'
  | 'feed_expense'
  | 'maintenance_expense'
  | 'salary_expense'
  | 'utility_expense'
  | 'other_income'
  | 'other_expense';

export interface Transaction {
  id: string;
  amount: number;
  type: TransactionType;
  description: string;
  date: string;
  createdBy: string;
  receiptImage?: string;
}

export interface BalanceSummary {
  totalBalance: number;
  todaySales: number;
  totalExpenses: number;
  salariesPaid: number;
}
