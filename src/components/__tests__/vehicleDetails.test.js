import { render, screen } from '@testing-library/react';
import { VehicleDetails } from '../mapWindow/detailsPopups';
import { DataDisplayContext } from '../../globalState';
import userEvent from '@testing-library/user-event';


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
  const headerEl = screen.getByText(/Some vehicle/i);
  const typeEl = screen.getByText(/truck/i);
  const colorEl = screen.getByText(/black/i);
  const platesNumberEl = screen.getByText(/WZX2134/i);
  const rangeEl = screen.getByText(/170km/i);
  const batteryLevelPctEl = screen.getByText(/70%/);
  const status = screen.getByText(/inaccessible/i);

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
  const headerEl = screen.queryByText(/Some vehicle/i);
  const typeEl = screen.queryByText(/truck/i);
  const colorEl = screen.queryByText(/black/i);
  const platesNumberEl = screen.queryByText(/WZX2134/i);
  const rangeEl = screen.queryByText(/170km/i);
  const batteryLevelPctEl = screen.queryByText(/70%/);
  const status = screen.queryByText(/inaccessible/i);

  expect(headerEl).toBeInTheDocument();
  expect(status).toBeInTheDocument();
  expect(typeEl).not.toBeInTheDocument();
  expect(colorEl).not.toBeInTheDocument();
  expect(platesNumberEl).not.toBeInTheDocument();
  expect(rangeEl).not.toBeInTheDocument();
  expect(batteryLevelPctEl).not.toBeInTheDocument();
});

test('close button calls closing popup function', () => {
  const context = {
    closeDetailsPopup: jest.fn()
  };
  render(<DataDisplayContext.Provider value={context}><VehicleDetails data={dummyVehicle} /></DataDisplayContext.Provider>);

  const button = screen.getByRole('button', { name: /×/i });

  userEvent.click(button);

  expect(context.closeDetailsPopup).toBeCalled();

});

