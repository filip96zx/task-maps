import React, { createContext, useState } from 'react';

const DataDisplayContext = createContext({
  categories: { vehicles: true, parkings: false, poi: false },
  menuDetailsPopup: null,
  showVehiclesCategory: () => { },
  showParkingsCategory: () => { },
  showPoiCategory: () => { },
  setDetailsPopup: () => { },
  closeDetailsPopup: () => { }
});

export default DataDisplayContext;

export function DataDisplayContextProvider(props) {
  const [categories, setCategories] = useState({ vehicles: true, parkings: false, poi: false });
  const [menuDetailsPupup, setMenuDetailsPupup] = useState(null);

  const showVehiclesCategory = () => {
    setCategories({ vehicles: true, parkings: false, poi: false });
  };

  const showParkingsCategory = () => {
    setCategories({ vehicles: false, parkings: true, poi: false });
  };

  const showPoiCategory = () => {
    setCategories({ vehicles: false, parkings: false, poi: true });
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
    showVehiclesCategory: showVehiclesCategory,
    showParkingsCategory: showParkingsCategory,
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