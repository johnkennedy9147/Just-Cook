import { Form } from './form';
import { RecipeList } from './recipeList';
import { DisplayRecipe } from './displayRecipe';
import { useState } from 'react';

export const App = () => {
  const [selectedRecipeId, setSelectedRecipeId] = useState(undefined);
  const [recipeList, setRecipeList] = useState([]);

  return (
    <>
      <Form setRecipeList={setRecipeList} />
      <RecipeList
        recipeList={recipeList}
        setSelectedRecipeId={setSelectedRecipeId}
      />
      <DisplayRecipe selectedRecipeId={selectedRecipeId} />
    </>
  );
};
