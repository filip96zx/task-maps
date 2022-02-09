import { render, screen } from '@testing-library/react';
import { PoiDetails } from '../mapWindow/detailsPopups';
import { DataDisplayContext } from '../../globalState';
import userEvent from '@testing-library/user-event';

const dummyPoi = {
  name: 'Narodowe Forum Muzyki',
  description: 'Narodowe Muzyki Opis',
  category: 'Ciekawe miejsca',
  address: {
    street: 'ul. Bałuckiego',
    house: '12',
    city: 'Warszawa'
  }

};

test('renders poi details popup info with all data', () => {
  render(<PoiDetails data={dummyPoi} />);
  const headerEl = screen.getByText(/Narodowe Forum Muzyki/i);
  const addressEl = screen.getByText(/ul. Bałuckiego 12/i);
  const cityEl = screen.getByText(/Warszawa/i);
  const categoryEl = screen.getByText(/Ciekawe miejsca/i);

  expect(headerEl).toBeInTheDocument();
  expect(addressEl).toBeInTheDocument();
  expect(cityEl).toBeInTheDocument();
  expect(categoryEl).toBeInTheDocument();
});

test('renders poi details popup info with null data', () => {
  const poiWithNulls = {
    ...dummyPoi, description: null, category: null, address: {
      street: null,
      house: null,
      city: null
    }
  };
  render(<PoiDetails data={poiWithNulls} />);
  const headerEl = screen.getByText(/Narodowe Forum Muzyki/i);
  const addressEl = screen.queryByText(/ul. Bałuckiego 12/i);
  const cityEl = screen.queryByText(/Warszawa/i);
  const categoryEl = screen.queryByText(/Ciekawe miejsca/i);

  expect(headerEl).toBeInTheDocument();
  expect(addressEl).not.toBeInTheDocument();
  expect(cityEl).not.toBeInTheDocument();
  expect(categoryEl).not.toBeInTheDocument();
});

test('close button calls closing popup function', () => {
  const context = {
    closeDetailsPopup: jest.fn()
  };
  render(<DataDisplayContext.Provider value={context}><PoiDetails data={dummyPoi} /></DataDisplayContext.Provider>);

  const button = screen.getByRole('button', { name: /×/i });

  userEvent.click(button);

  expect(context.closeDetailsPopup).toBeCalled();

});
