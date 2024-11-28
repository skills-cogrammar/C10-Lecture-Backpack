function BudgetManager ({budget, setBudget}) {
    return (
        <div>
            <h2>Manage Budget</h2>
            <input
            type="number"
            placeHolder="Set your daily budget"
            {/*onChange= /*Enter a function here*/}
            />
            <p>Current Budget: {/*Enter budget round off*/}</p>
        </div>
    );
}

export default BudgetManager;