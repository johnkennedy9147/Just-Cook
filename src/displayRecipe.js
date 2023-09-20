import { useEffect, useState } from 'react';
import { URLS } from './constants/urls';

const IngredientList = ({ mealDetails }) => {
  const ingredientDictionary = {};

  // api returns object with multiple ingredient fields numbered 1 - 20
  for (let i = 1; i < 21; i++) {
    const ingredientNameKey = `strIngredient${i}`;
    if (mealDetails[ingredientNameKey]) {
      const ingredientName = mealDetails[ingredientNameKey];
      const ingredientMeasureKey = `strMeasure${i}`;
      const ingredientMeasure = mealDetails[ingredientMeasureKey];
      ingredientDictionary[ingredientName] = ingredientMeasure;
    }
  }

  return Object.entries(ingredientDictionary).map(([ingredient, measure]) => (
    <li key={ingredient}>
      {measure} {ingredient}
    </li>
  ));
};
export const DisplayRecipe = ({ selectedRecipeId }) => {
  const [mealDetails, setMealDetails] = useState({});

  const fetchRecipe = async (selectedRecipeId) => {
    try {
      const recipeResponse = await fetch(
        `${URLS.apiRoot}${URLS.recipeLookup}${selectedRecipeId}`,
      );
      const recipeData = await recipeResponse.json();
      setMealDetails(recipeData.meals[0]);
    } catch (err) {
      console.log('Error fetching meal details:');
      console.log(err);
    }
  };

  useEffect(() => {
    if (selectedRecipeId) fetchRecipe(selectedRecipeId);
  }, [selectedRecipeId]);

  if (selectedRecipeId) {
    return (
      <article>
        <header className='mb-3'>
          <h3 className='text-lg font-bold'>{mealDetails.strMeal}</h3>
        </header>
        <main>
          <section className='mb-3'>
            <h4 className='text-md font-bold'>Ingredients</h4>
            <ul>
              <IngredientList mealDetails={mealDetails} />
            </ul>
          </section>
          <section className='mb-3'>
            <h4 className='text-md font-bold'>Method</h4>
            <p>{mealDetails.strInstructions}</p>
          </section>
        </main>
      </article>
    );
  } else {
    return null;
  }
};
