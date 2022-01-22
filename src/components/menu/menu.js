import React from 'react';
import CarsMenu from './carsMenu';
import ParkingsMenu from './parkingsMenu.';
import PointsOfInterestMenu from './pointsOfInterestMenu';

export default function Menu() {
  return (
    <aside>
      <h2>menu</h2>
      <menu>
        <CarsMenu />
        <ParkingsMenu/>
        <PointsOfInterestMenu />
      </menu>
    </aside>
  );
}
