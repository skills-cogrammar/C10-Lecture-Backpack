function Favourites({ favourites }) {
    return (
        <div>
            <h1>Favourites</h1>
            {favourites.length > 0 ? (
                <ul>
                    {favourites.map((recipe, index) => (
                        <li key={index}>
                            <h3>{recipe.title}</h3>
                            <p>Ingredients: {recipe.ingredients}</p>
                            <p>Preparation Time: {recipe.prepTime}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No favourites yet! Start adding recipes.</p>
            )}
        </div>
    );
}

export default Favourites;