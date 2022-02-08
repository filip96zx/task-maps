import { render, screen, fireEvent } from '@testing-library/react';
import { VehiclePopup } from '../mapWindow/popups';
import { DataDisplayContext } from '../../globalState';
import userEvent from '@testing-library/user-event';

const dummyVehicle = {
  name: 'Some vehicle',
  rangeKm: 170,
  type: 'car'
};


test('renders vehicles popup header', () => {
  render(<VehiclePopup data={dummyVehicle} />);
  const headerEl = screen.getByTestId('header');
  expect(headerEl.textContent).toBe(dummyVehicle.name);
});

test('renders vehicles popup type', () => {
  render(<VehiclePopup data={dummyVehicle} />);
  const typeEl = screen.getByTestId('type');
  expect(typeEl.textContent).toBe(dummyVehicle.type.toLocaleLowerCase());
});

test('renders vehicles popup range km', () => {
  render(<VehiclePopup data={dummyVehicle} />);
  const rangeEl = screen.getByTestId('range');
  expect(rangeEl.textContent).toBe(dummyVehicle.rangeKm + 'km');
});

test('not renders vehicles popup type if it is null', () => {
  const nullTypeVehicle = { ...dummyVehicle, type: null };
  render(<VehiclePopup data={nullTypeVehicle} />);

  expect(screen.queryByTestId('type')).not.toBeInTheDocument();
});

test('not renders vehicles popup rangeKM if it is null', () => {
  const nullRangeVehicle = { ...dummyVehicle, rangeKm: null };
  render(<VehiclePopup data={nullRangeVehicle} />);
  expect(screen.queryByTestId('range')).not.toBeInTheDocument();
});


test('more... button calls setDetailsPopup', () => {
  const context = {
    setDetailsPopup: jest.fn()
  };
  render(<DataDisplayContext.Provider value={context}><VehiclePopup data={dummyVehicle} /></DataDisplayContext.Provider>);

  const button = screen.getByRole('button', { name: /more\.\.\./i });

  userEvent.click(button);

  expect(context.setDetailsPopup).toBeCalled();

});
