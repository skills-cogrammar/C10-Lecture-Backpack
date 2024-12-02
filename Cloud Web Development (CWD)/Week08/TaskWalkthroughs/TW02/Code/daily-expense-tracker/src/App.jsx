import { useState } from 'react'
import './App.css'
import BudgetManager from './components/BudgetManager';
import ExpenseLogger from './components/ExpenseLogger';

function App() {
    const [budget, setBudget] = useState(0);
    const [expenses, setExpenses] = useState([]);
    let balance = budget - expenses.reduce((total, exp) => total = total + exp.amount, 0);

    return (
      <div className = "app">
        <h1>Daily Expense Tracker</h1>
        <BudgetManager budget = {budget} setBudget = {setBudget}></BudgetManager>
        <ExpenseLogger expenses={expenses} setExpenses={setExpenses}></ExpenseLogger>
        <h2>Remaining Balance: {balance.toFixed(2)}</h2>
        {balance < 0 && <p style={{ color: "red" }}>You have exceeded your budget!</p>}
      </div>
    ) 
}

export default App;
