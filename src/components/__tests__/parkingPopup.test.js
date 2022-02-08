import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DataDisplayContext } from '../../globalState';
import { ParkingPopup } from '../mapWindow/popups';


test('renders popup with correct data without nulls', () => {
  const dummyParking = {
    name: 'Sample parking',
    address: {
      street: 'ul. Bałuckiego',
      house: '12',
      city: 'Warszawa'
    }
  };
  render(<ParkingPopup data={dummyParking} />);
  const header = screen.getByRole('heading', { name: /Sample parking/i });
  const address = screen.getByTestId('address');
  const city = screen.getByTestId('city');

  expect(header).toHaveTextContent(dummyParking.name);
  expect(address).toHaveTextContent(`${dummyParking.address.street} ${dummyParking.address.house}`);
  expect(city).toHaveTextContent(dummyParking.address.city);

});

test('renders popup without full data', () => {
  const dummyParking = {
    name: 'Sample parking',
    address: {
      street: null,
      house: null,
      city: null
    }
  };
  render(<ParkingPopup data={dummyParking} />);
  const header = screen.getByRole('heading', { name: /Sample parking/i });
  const address = screen.queryByTestId('address');
  const city = screen.queryByTestId('city');

  expect(header).toHaveTextContent(dummyParking.name);
  expect(address).not.toBeInTheDocument();
  expect(city).not.toBeInTheDocument();

});

test('more... button calls open details popup function', () => {
  const dummyParking = {
    name: 'Sample parking',
    address: {
      street: 'ul. Bałuckiego',
      house: '12',
      city: 'Warszawa'
    }
  };

  const context = {
    setDetailsPopup: jest.fn()
  };

  render(<DataDisplayContext.Provider value={context}><ParkingPopup data={dummyParking} /></DataDisplayContext.Provider>);

  const button = screen.getByRole('button', { name: /more\.\.\./i });

  userEvent.click(button);

  expect(context.setDetailsPopup).toBeCalled();

});