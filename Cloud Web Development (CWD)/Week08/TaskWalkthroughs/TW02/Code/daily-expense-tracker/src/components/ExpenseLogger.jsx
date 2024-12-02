function ExpenseLogger ({ expenses, setExpenses }) {
    // Create a function which asks the user for their expense and then 
    function addExpense () {
        const desc = prompt("Enter the name of your expense:");
        const amount = Number(prompt("Enter the expense amount:"));

        // Use the entered value to update the expense state
        setExpenses([...expenses, {desc, amount}])
    }

    return (
        <div>
            <h2>Log Expenses</h2>
            <button onClick = {addExpense}>Add Expense</button>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>
                        {expense.desc}: {expense.amount.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExpenseLogger;

