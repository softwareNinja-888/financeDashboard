function createIncome(id, source, amount, date) {
    return { id, source, amount, date, format() {
        return `${this.source}: $${this.amount} (Received on ${this.date})`;
      }, };
}

function createExpense(id, category, amount, date) {
  return { id, category, amount, date, format() {
    return `${this.category}: $${this.amount} (Spent on ${this.date})`;
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
      createIncome(1, 'Salary', 5000, '2024-12-01'),
      createIncome(2, 'Freelancing', 1200, '2024-12-03'),
    ],
    expenses: [
      createExpense(1, 'Rent', 1500, '2024-12-05'),
      createExpense(2, 'Groceries', 300, '2024-12-06'),
    ],
    savings: {
      total: 10000,
      goals: [
        createSavingsGoal(1, 'Emergency Fund', 15000, 5000),
        createSavingsGoal(2, 'Vacation', 3000, 2000),
        createSavingsGoal(2, 'Cash', 100, 50),
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
  

  export {financeData}