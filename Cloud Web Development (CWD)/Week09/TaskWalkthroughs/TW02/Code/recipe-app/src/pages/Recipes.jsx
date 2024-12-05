const recipes = [
    { title: "Spaghetti Bolognese", ingredients: "Pasta, Beef, Tomato Sauce", prepTime: "30 mins" },
    { title: "Chicken Curry", ingredients: "Chicken, Curry Paste, Coconut Milk", prepTime: "45 mins" },
    { title: "Vegetable Stir-fry", ingredients: "Mixed Vegetables, Soy Sauce", prepTime: "20 mins" },
];

function Recipes({ favourites }) {

    
    const saveToFavorites = (recipe) => {
        favourites.push(recipe);
    };

    return (
        <div>
            <h1>Recipes</h1>
            <div>
                {recipes.map((recipe, index) => (
                    <div key={index}>
                        <h3>{recipe.title}</h3>
                        <p>Ingredients: {recipe.ingredients}</p>
                        <p>Preparation Time: {recipe.prepTime}</p>
                        <button onClick={() => saveToFavorites(recipe)}>Save to Favourites</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Recipes;