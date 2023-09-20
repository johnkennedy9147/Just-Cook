import { Form } from './form';
import { RecipeList } from './recipeList';
import { DisplayRecipe } from './displayRecipe';
import { useState } from 'react';

export const App = () => {
  // temporarily using a meal id I know exists for dev - remove later
  const [selectedRecipeId, setSelectedRecipeId] = useState(52772);

  return (
    <>
      <Form />
      <RecipeList />
      <DisplayRecipe selectedRecipeId={selectedRecipeId} />
    </>
  );
};
