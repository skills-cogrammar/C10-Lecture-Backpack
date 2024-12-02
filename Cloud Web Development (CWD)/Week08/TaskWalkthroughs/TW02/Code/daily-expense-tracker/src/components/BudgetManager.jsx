function BudgetManager ({budget, setBudget}) {
    return (
        <div>
            <h2>Manage Budget</h2>
            <input
            type="number"
            placeholder="Set your daily budget"
            onChange={(event) => setBudget(Number(event.target.value))}
            />
            <p>Current Budget: {budget.toFixed(2)}</p>
        </div>
    );
}

export default BudgetManager;