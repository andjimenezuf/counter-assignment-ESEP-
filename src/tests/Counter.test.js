// Import necessary react testing library helpers here
// Import the Counter component here
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  const message = screen.getByText(/counter/i);

  expect(message).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {

  const count = screen.getByTestId('count');

  expect(count).toHaveTextContent('0');

});

test('clicking + increments the count', () => {
  const increment = screen.getByText('+');
  const count = screen.getByTestId('count');

  // simulate increment button
  fireEvent.click(increment);

  // check
  expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const decrement = screen.getByText('-');
  const count = screen.getByTestId('count');

  fireEvent.click(decrement);

  expect(count).toHaveTextContent('-1');

});
