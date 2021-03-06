import { useContext } from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

import { ExpensesContext } from '../store/expenses-context';

import { getDateMinusDays } from '../util/date';

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();

    const dateSevenDaysAgo = getDateMinusDays(today, 7);

    return (expense.date >= dateSevenDaysAgo) && (expense.date <= today);
  });

  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days"  fallbackText="No expenses registered for the last days." />
  );
};

export default RecentExpenses;
