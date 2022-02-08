import { render, screen } from '@testing-library/react';
import { ParkingsDetails } from '../mapWindow/detailsPopups';
import { DataDisplayContext } from '../../globalState';
import userEvent from '@testing-library/user-event';


const dummyParking = {
  name: 'Some Parking',
  spacesCount: 4,
  availableSpacesCount: 3,
  chargers: [1],
  address: {
    street: 'ul.Warszawska',
    house: '15',
    city: 'Warszawa'
  }
};

test('reders details parking popup with correct data', () => {
  render(<ParkingsDetails data={dummyParking} />);

  const headerEl = screen.getByText(/some parking/i);
  const addresEl = screen.getByText(/ul.Warszawska 15/i);
  const cityEl = screen.getByText(/Warszawa/i);
  const spacesCountEl = screen.getByText(/4/);
  const availableSpacesEl = screen.getByText(/3/);
  const chargersEl = screen.getByText(/chargers:/);

  expect(headerEl).toBeInTheDocument();
  expect(addresEl).toBeInTheDocument();
  expect(cityEl).toBeInTheDocument();
  expect(spacesCountEl).toBeInTheDocument();
  expect(availableSpacesEl).toBeInTheDocument();
  expect(chargersEl).toBeInTheDocument();
});

test('reders details parking popup with null data', () => {
  const dummydata = { ...dummyParking, address: { street: null, city: null, house: null }, spacesCountL: null, availableSpacesCount: null, spacesCount: null };
  render(<ParkingsDetails data={dummydata} />);

  const addresEl = screen.queryByText(/ul.Warszawska 15/i);
  const cityEl = screen.queryByText(/Warszawa/i);
  const spacesCountEl = screen.queryByText(/4/);
  const availableSpacesEl = screen.queryByText(/3/);
  const chargersEl = screen.queryByText(/chargers:/);

  expect(addresEl).not.toBeInTheDocument();
  expect(cityEl).not.toBeInTheDocument();
  expect(spacesCountEl).not.toBeInTheDocument();
  expect(availableSpacesEl).not.toBeInTheDocument();
  expect(chargersEl).toBeInTheDocument();
});

test('close button calls closing popup function', () => {
  const context = {
    closeDetailsPopup: jest.fn()
  };
  render(<DataDisplayContext.Provider value={context}><ParkingsDetails data={dummyParking} /></DataDisplayContext.Provider>);

  const button = screen.getByRole('button', { name: /×/i });

  userEvent.click(button);

  expect(context.closeDetailsPopup).toBeCalled();

});