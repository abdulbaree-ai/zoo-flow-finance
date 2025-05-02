
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { TransactionType } from '../types';
import { useToast } from '@/hooks/use-toast';

const AddTransaction = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const queryParams = new URLSearchParams(location.search);
  const typeParam = queryParams.get('type');
  
  const [formData, setFormData] = useState({
    amount: '',
    type: typeParam === 'income' ? 'ticket_sale' : 
           typeParam === 'salary' ? 'salary_expense' : 'feed_expense',
    description: '',
    date: new Date().toISOString().split('T')[0],
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const isIncome = ['ticket_sale', 'food_sale', 'merchandise_sale', 'other_income'].includes(formData.type);
  
  const transactionTypes: { value: TransactionType, label: string }[] = isIncome
    ? [
        { value: 'ticket_sale', label: 'Ticket Sales' },
        { value: 'food_sale', label: 'Food & Beverage' },
        { value: 'merchandise_sale', label: 'Merchandise' },
        { value: 'other_income', label: 'Other Income' },
      ]
    : [
        { value: 'feed_expense', label: 'Animal Feed' },
        { value: 'maintenance_expense', label: 'Maintenance' },
        { value: 'salary_expense', label: 'Salary' },
        { value: 'utility_expense', label: 'Utility Bill' },
        { value: 'other_expense', label: 'Other Expense' },
      ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'amount' && value ? parseFloat(value) : value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Transaction Added",
        description: `Your transaction has been successfully recorded.`,
      });
      setIsSubmitting(false);
      navigate('/');
    }, 1500);
  };
  
  return (
    <Layout title={isIncome ? "Add Income" : "Add Expense"}>
      <form onSubmit={handleSubmit} className="space-y-6 py-4">
        <div className="space-y-2">
          <Label htmlFor="amount">Amount ($)</Label>
          <Input
            id="amount"
            name="amount"
            type="number"
            step="0.01"
            placeholder="0.00"
            value={formData.amount}
            onChange={handleChange}
            className="text-lg"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="type">Type</Label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            required
          >
            {transactionTypes.map((type) => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Enter details about this transaction"
            value={formData.description}
            onChange={handleChange}
            className="min-h-[80px]"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="receipt" className="cursor-pointer">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50">
              <span className="block text-sm text-muted-foreground">Click to upload receipt (optional)</span>
              <span className="text-xs text-muted-foreground">PNG, JPG or PDF up to 5MB</span>
            </div>
            <input
              id="receipt"
              name="receipt"
              type="file"
              className="hidden"
              accept="image/png, image/jpeg, application/pdf"
            />
          </Label>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-zoo-purple hover:bg-zoo-purple/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Processing...' : isIncome ? 'Add Income' : 'Add Expense'}
        </Button>
      </form>
    </Layout>
  );
};

export default AddTransaction;
