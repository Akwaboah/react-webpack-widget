import { render, screen } from '@testing-library/react';
import SignUp from '../containers/SignUp';

test('renders signup header test', () => {
  render(<SignUp/>);
  const textElement = screen.getByText(/Welcome, SignUp/i);
  expect(textElement).toBeInTheDocument();
});
