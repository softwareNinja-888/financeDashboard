import { merge } from "lodash";

function createIncome(id, source, amount, month) {
    return { id, source, amount, month, format() {
        return `${this.source}: $${this.amount} (Received on ${this.month})`;
      }, };
}

function createExpense(id, category, amount, month) {
  return { id, category, amount, month, format() {
    return `${this.category}: $${this.amount} (Spent on ${this.month})`;
  }, };
}

function createInvestment(id, type, name, value) {
    return { id, type, name, value };
}

function createMonthlySummary(income, expenses, savings) {
  return { income, expenses, savings,format() {
    return `Income: ${this.income}, Expenses: $${this.expenses}, Savings: ${this.savings}`;
  } };
}

function createSavingsGoal(id, name, target, current) {
  return {
    id,
    name,
    target,
    current,
    // Method to calculate progress
    progress() {
      return (this.current / this.target) * 100;
    },
    // Method to format savings goal details
    format() {
      return `Goal: ${this.name}, Target: $${this.target}, Current: $${this.current}, Progress: ${this.progress().toFixed(2)}%`;
    },
  };
}

// DATA OBJECT: 

const financeData = {
  
    income: [
      createIncome(1, 'Salary', 5000, 'Jan'),
      createIncome(2, 'Freelancing', 1500, 'Feb'),
      createIncome(3, 'Salary', 1800, 'Mar'),
      createIncome(4, 'Freelancing', 2000, 'Apr'),
      createIncome(5, 'Salary', 2200, 'May'),
      createIncome(6, 'Freelancing', 1500, 'Jun'),
      createIncome(7, 'Salary', 3000, 'Jul'),
      createIncome(8, 'Freelancing', 2000, 'Aug'),
      createIncome(9, 'Salary', 2100, 'Sep'),
      createIncome(10, 'Freelancing', 1200, 'Oct'),
      createIncome(11, 'Salary', 2500, 'Nov'),
      createIncome(12, 'Freelancing', 2000, 'Dec'),
    ],

    expenses: [
      createExpense(1, 'Rent', 4500, 'Jan'),
      createExpense(2, 'Groceries', 1300, 'Feb'),
      createExpense(3, 'Rent', 2000, 'Mar'),
      createExpense(4, 'Groceries', 1800, 'Apr'),
      createExpense(5, 'Rent', 2000, 'May'),
      createExpense(6, 'Groceries', 1800, 'Jun'),
      createExpense(7, 'Rent', 2500, 'Jul'),
      createExpense(8, 'Groceries', 1700, 'Aug'),
      createExpense(9, 'Rent', 1900, 'Sep'),
      createExpense(10, 'Groceries', 1300, 'Oct'),
      createExpense(11, 'Rent', 2000, 'Nov'),
      createExpense(12, 'Groceries', 1500, 'Dec'),
    ],
    savings: {
      total: 10000,
      goals: [
        createSavingsGoal(1, 'Emergency Fund', 15000, 5000),
        createSavingsGoal(2, 'Vacation', 3000, 2000),
        createSavingsGoal(3, 'Cash', 10000, 600),
        createSavingsGoal(4,'Car',45000,2300),
        createSavingsGoal(5,'House',1145000,213000),
        
      ],
    },
    investments: [
      createInvestment(1, 'Stocks', 'Tech Fund', 5000),
      createInvestment(2, 'Bonds', 'Gov Bond', 2000),
    ],
    reports: {
      monthlySummary: createMonthlySummary(6200, 1800, 3000),
    },
    totalIncome() {
        return this.income.reduce((sum, item) => sum + item.amount, 0)
    },
    totalExpense() {
        return  this.expenses.reduce((sum, item) => sum + item.amount, 0)

    },
    formatMoney (amount,currency){
      const formatAmount = new Intl.NumberFormat(`en-ZA`,{
          style: 'currency',
          currency: `${currency}`,
          useGrouping: true,
          minimumFractionDigits:0,
          maximumFractionDigits:0,
      }).format(amount)
  
      return `${formatAmount}`
    }
  };

const IncomeExpenses = (function(){
  const combined = [...financeData.income, ...financeData.expenses];
  const merged = Array.from(
      combined.reduce((map, obj) => {
          const {month} = obj;
          if (!map.has(month)) {
              map.set(month, { month, income: 0, expense:  0 });
          }
          if ('source' in obj) {
              map.get(month).income += obj.amount; // Sum income
          } else if ('category' in obj) {
              map.get(month).expense += obj.amount; // Sum expenses
          }
          return map;
      }, new Map()).values()
  );
      console.log(merged);
  return{merged}
})()
  

  export {financeData,IncomeExpenses}