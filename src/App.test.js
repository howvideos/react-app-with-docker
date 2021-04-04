import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tamang change lang/i);
  expect(linkElement).toBeInTheDocument();
});

