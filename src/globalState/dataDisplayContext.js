import React, { createContext, useState } from 'react';

const DataDisplayContext = createContext({
  categories: { cars: true, parkings: false, poi: false },
  menuDetailsPopup: null,
  showCarsCategory: () => { },
  showParkingsCategory: () => { },
  showPoiCategory: () => { },
  setDetailsPopup: () => { },
  closeDetailsPopup: () => { }
});

export default DataDisplayContext;

export function DataDisplayContextProvider(props) {
  const [categories, setCategories] = useState({ cars: true, parkings: false, poi: false });
  const [menuDetailsPupup, setMenuDetailsPupup] = useState(null);

  const showCarsCategory = () => {
    setCategories({ cars: true, parkings: false, poi: false });
  };

  const showParkingsCategory = () => {
    setCategories({ cars: false, parkings: true, poi: false });
  };

  const showPoiCategory = () => {
    setCategories({ cars: false, parkings: false, poi: true });
  };

  const setDetailsPopup = (popupData) => {
    setMenuDetailsPupup(popupData);
  };

  const closeDetailsPopup = () => {
    setMenuDetailsPupup(null);
  };


  const context = {
    categories: categories,
    menuDetailsPopup: menuDetailsPupup,
    showCarsCategory: showCarsCategory,
    setParkingsCategory: showParkingsCategory,
    showPoiCategory: showPoiCategory,
    setDetailsPopup: setDetailsPopup,
    closeDetailsPopup: closeDetailsPopup
  };

  return (
    <DataDisplayContext.Provider value={context}>
      {props.children}
    </DataDisplayContext.Provider>
  );
}