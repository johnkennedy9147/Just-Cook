import { useState, useEffect } from 'react';
import { useCombobox } from 'downshift';
import { URLS } from './constants/urls';
export const IngredientsComboBox = ({ setSelectedIngredients }) => {
  const [allIngredients, setAllIngredients] = useState([]);
  const [filteredIngredientList, setFilteredIngredientList] = useState([]);

  useEffect(() => {
    const fetchAllIngredients = async () => {
      try {
        const ingredientsResponse = await fetch(
          `${URLS.apiRoot}${URLS.listAllIngredients}`,
        );
        const ingredients = await ingredientsResponse.json();
        const ingredientsList = ingredients.meals.map(
          (ingObj) => ingObj.strIngredient,
        );
        setAllIngredients(ingredientsList);
        setFilteredIngredientList(ingredientsList);
      } catch (err) {
        console.log('Error fetching ingredients list:');
        console.log(err);
      }
    };
    fetchAllIngredients();
  }, []);

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getItemProps,
    closeMenu,
    setInputValue,
  } = useCombobox({
    items: filteredIngredientList,
    onInputValueChange: ({ inputValue }) => {
      if (!inputValue) {
        closeMenu();
        // restore full list of ingredients after input is cleared
        setFilteredIngredientList(allIngredients);
      } else {
        setFilteredIngredientList(
          allIngredients.filter((ingredient) =>
            ingredient.toLowerCase().includes(inputValue.toLowerCase()),
          ),
        );
      }
    },
    onSelectedItemChange: ({ selectedItem }) => {
      // when input is cleared selectItem becomes null so do nothing
      if (selectedItem !== null) {
        setSelectedIngredients((si) =>
          Array.from(new Set([...si, selectedItem])),
        );
        setInputValue('');
      }
    },
  });

  return (
    <>
      <div>
        <label {...getLabelProps()}>Choose your ingredients:</label>
        <div className='flex'>
          <input
            placeholder='What ingredients do you have?'
            className='w-full p-1.5 mt-2'
            {...getInputProps()}
          />
          <button
            aria-label='toggle menu'
            className='px-2'
            type='button'
            {...getToggleButtonProps()}
          >
            {isOpen ? <>&#8593;</> : <>&#8595;</>}
          </button>
        </div>
      </div>
      <ul
        className={`absolute bg-white mt-1 max-h-80 overflow-auto p-0 z-10 ${
          !(isOpen && filteredIngredientList.length) && 'hidden'
        }`}
        {...getMenuProps()}
      >
        {isOpen &&
          filteredIngredientList.map((item, index) => (
            <li key={`${index}`} {...getItemProps({ item, index })}>
              <span>{item}</span>
            </li>
          ))}
      </ul>
    </>
  );
};
