import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders board', () => {
  const { getByText } = render(<App />);
  const el = getByText(/Boards/i);
  expect(el).toBeInTheDocument();
});
