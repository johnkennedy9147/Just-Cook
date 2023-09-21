import { Form } from './form';
import { RecipeList } from './recipeList';
import { DisplayRecipe } from './displayRecipe';
import { useState } from 'react';

export const App = () => {
  // temporarily using meal id(s) I know exists for dev - remove later
  const [selectedRecipeId, setSelectedRecipeId] = useState(52772);
  const sampleMealResult = [
    {
      strMeal: 'Chick-Fil-A Sandwich',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg',
      idMeal: '53016',
    },
    {
      strMeal: 'Chicken Couscous',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg',
      idMeal: '52850',
    },
    {
      strMeal: 'Chicken Fajita Mac and Cheese',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg',
      idMeal: '52818',
    },
  ];
  const [recipeList, setRecipeList] = useState(sampleMealResult);

  return (
    <>
      <Form />
      <RecipeList
        recipeList={recipeList}
        setSelectedRecipeId={setSelectedRecipeId}
      />
      <DisplayRecipe selectedRecipeId={selectedRecipeId} />
    </>
  );
};
