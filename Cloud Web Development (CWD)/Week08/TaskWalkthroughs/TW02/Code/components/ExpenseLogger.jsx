function ExpenseLogger ({ expenses, setExpenses }) {
    // Create a function which asks the user for their expense and then 
    // Use the entered value to update the expense state

    return (
        <div>
            <h2>Log Expenses</h2>
            <button onClick = {addExpense}>Add Expense</button>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>
                        {expense.desciption}: {expense.amount.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExpenseLogger;

