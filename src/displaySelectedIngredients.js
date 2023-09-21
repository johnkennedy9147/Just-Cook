export const DisplaySelectedIngredients = ({ selectedIngredients }) => {
  return (
    <>
      <p className='mb-3'>Selected Ingredients:</p>
      <ul className='flex flex-wrap'>
        {selectedIngredients.map((ingredient, index) => (
          <li className='m-2' key={`${index}`}>
            {ingredient}
          </li>
        ))}
      </ul>
      <br />
    </>
  );
};
