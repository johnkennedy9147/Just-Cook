export const RecipeList = ({ recipeList, setSelectedRecipeId }) => {
  return (
    <article className='mb-3'>
      <label htmlFor='mealSelector'>
        <h4 className='text-md font-bold'>Select a Meal:</h4>
      </label>
      <select
        id='mealSelector'
        onChange={(e) => setSelectedRecipeId(e.target.value)}
      >
        {recipeList.length > 0 ? (
          <option value=''>Select a Meal</option>
        ) : (
          <option value=''>Add some ingredients...</option>
        )}
        {recipeList.map(({ idMeal, strMeal }) => (
          <option key={idMeal} value={idMeal}>
            {strMeal}
          </option>
        ))}
      </select>
    </article>
  );
};
