
import { TransactionType } from "../types";

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(date);
};

export const getRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) {
    return 'Today';
  } else if (diffDays === 1) {
    return 'Yesterday';
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else {
    return formatDate(dateString);
  }
};

export const getTransactionIcon = (type: TransactionType): string => {
  switch (type) {
    case 'ticket_sale':
      return 'ticket';
    case 'food_sale':
      return 'utensils';
    case 'merchandise_sale':
      return 'shopping-bag';
    case 'feed_expense':
      return 'leaf';
    case 'maintenance_expense':
      return 'tool';
    case 'salary_expense':
      return 'users';
    case 'utility_expense':
      return 'zap';
    case 'other_income':
      return 'plus-circle';
    case 'other_expense':
      return 'minus-circle';
    default:
      return 'circle';
  }
};

export const isIncome = (type: TransactionType): boolean => {
  return ['ticket_sale', 'food_sale', 'merchandise_sale', 'other_income'].includes(type);
};
