import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DataDisplayContext } from '../../globalState';
import { PoiPopup } from '../mapWindow/popups';

const dummyData = {
  name: 'narodowe forum muzyki',
  address: {
    street: 'ul. Warszawska',
    house: '34',
    city: 'wrocław'
  }
};

test('renders correctly data', () => {
  render(<PoiPopup data={dummyData} />);
  const header = screen.getByRole('heading', { name: /narodowe forum muzyki/i });
  const city = screen.getByText(/ul. Warszawska 34/i);
  const address = screen.getByText(/wrocław/i);

  expect(header).toBeInTheDocument();
  expect(city).toBeInTheDocument();
  expect(address).toBeInTheDocument();

});

test('renders correctly data with nulls', () => {
  const dummyData = {
    name: 'narodowe forum muzyki',
    address: {
      street: null,
      house: null,
      city: null
    }
  };

  render(<PoiPopup data={dummyData} />);
  const header = screen.getByRole('heading', { name: /narodowe forum muzyki/i });
  const city = screen.queryByText(/ul. Warszawska 34/i);
  const address = screen.queryByText(/wrocław/i);

  expect(header).toBeInTheDocument();
  expect(city).not.toBeInTheDocument();
  expect(address).not.toBeInTheDocument();

});

test('more... button calls open popup function', () => {
  const context = {
    setDetailsPopup: jest.fn()
  };

  render(<DataDisplayContext.Provider value={context} ><PoiPopup data={dummyData} /></DataDisplayContext.Provider>);


  const button = screen.getByRole('button', { name: /more\.\.\./i });

  userEvent.click(button);

  expect(context.setDetailsPopup).toBeCalled();
});