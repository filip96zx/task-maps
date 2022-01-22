import React, { createContext, useState } from 'react';

const CategoryDisplayContext = createContext({
  categories: { cars: true, parkings: false, poi: false },
  setCars: () => { },
  setParkings: () => { },
  setPoi: () => { }
});

export default CategoryDisplayContext;

export function CategoryDisplayContextProvider(props) {
  const [categories, setCategories] = useState({ cars: true, parkings: false, poi: false });

  const setCars = () => {
    setCategories({ cars: true, parkings: false, poi: false });
  };

  const setParkings = () => {
    setCategories({ cars: false, parkings: true, poi: false });
  };

  const setPoi = () => {
    setCategories({ cars: false, parkings: false, poi: true });
  };

  const context = {
    categories: categories,
    setCars: setCars,
    setParkings: setParkings,
    setPoi: setPoi
  };

  return (
    <CategoryDisplayContext.Provider value={context}>
      {props.children}
    </CategoryDisplayContext.Provider>
  );
}