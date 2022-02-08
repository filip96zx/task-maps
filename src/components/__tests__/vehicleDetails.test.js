import { render, screen } from '@testing-library/react';
import { VehicleDetails } from '../mapWindow/detailsPopups';

const dummyVehicle = {
  name: 'Some vehicle',
  platesNumber: 'WZX2134',
  rangeKm: 170,
  type: 'truck',
  batteryLevelPct: 70,
  status: 'inaccessible',
  color: 'black'

};

test('renders vehicle details popup info with all data', () => {
  render(<VehicleDetails data={dummyVehicle} />);
  const headerEl = screen.getByTestId('header-details');
  const typeEl = screen.getByTestId('type');
  const colorEl = screen.getByTestId('color');
  const platesNumberEl = screen.getByTestId('platesNumber');
  const rangeEl = screen.getByTestId('range');
  const batteryLevelPctEl = screen.getByTestId('batteryLevelPct');
  const status = screen.getByTestId('status');

  expect(headerEl.textContent).toBe(dummyVehicle.name);
  expect(typeEl.textContent).toBe(dummyVehicle.type.toLocaleLowerCase());
  expect(colorEl.textContent).toBe(dummyVehicle.color.toLocaleLowerCase());
  expect(platesNumberEl.textContent).toBe(dummyVehicle.platesNumber);
  expect(rangeEl.textContent).toBe(dummyVehicle.rangeKm + 'km');
  expect(batteryLevelPctEl.textContent).toBe(dummyVehicle.batteryLevelPct + '%');
  expect(status.textContent).toBe(dummyVehicle.status.toLocaleLowerCase());
});

test('renders vehicle details popup info with null properties', () => {
  const vehicleWithNulls = { ...dummyVehicle, type: null, color: null, rangeKm: null, batteryLevelPct: null, platesNumber: null };
  render(<VehicleDetails data={vehicleWithNulls} />);

  expect(screen.queryByTestId('type')).not.toBeInTheDocument();
  expect(screen.queryByTestId('color')).not.toBeInTheDocument();
  expect(screen.queryByTestId('platesNumber')).not.toBeInTheDocument();
  expect(screen.queryByTestId('range')).not.toBeInTheDocument();
  expect(screen.queryByTestId('batteryLevelPct')).not.toBeInTheDocument();
});

// test('close button closes popup', () => {
//   render(<VehicleDetails data={dummyVehicle} />);
//   fireEvent.click(screen.getByRole('button', { name: /×/i }));
//   expect(screen.getAllByRole('heading').length).toBe(0);
// });

