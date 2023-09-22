import { useState } from 'react';
import { URLS } from './constants/urls';

import { IngredientsComboBox } from './ingredientsComboBox';
import { DisplaySelectedIngredients } from './displaySelectedIngredients';

export const Form = ({ setRecipeList }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const fetchRecipesForIngredient = async (ingredient) => {
    const mealsResponse = await fetch(
      `${URLS.apiRoot}${URLS.ingredientSearch}${ingredient}`,
    );
    const meals = await mealsResponse.json();
    setRecipeList((ri) => [...ri, ...meals.meals]);
  };

  const searchForRecipesByIngredients = (e) => {
    e.preventDefault();
    setRecipeList([]);
    selectedIngredients.forEach((ingredient) => {
      fetchRecipesForIngredient(ingredient);
    });
  };

  return (
    <form onSubmit={searchForRecipesByIngredients}>
      <IngredientsComboBox setSelectedIngredients={setSelectedIngredients} />
      <DisplaySelectedIngredients selectedIngredients={selectedIngredients} />
      <button type='submit' className='mb-3 px-3 py-1 rounded-full border'>
        Find Recipes
      </button>
    </form>
  );
};
