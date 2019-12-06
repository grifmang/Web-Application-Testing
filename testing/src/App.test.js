import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { handleBall } from "./components/ShowButtons";

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/center/i);
  expect(linkElement).toBeInTheDocument();
});

test('Show if button (handleBall) clicked', () => {
  const oneClick = { button: 1 }
fireEvent.click(getByText('Ball'), oneClick)
})

// test('Tigers header is found', () => {
//   const { getByText } = render(<App />);

//   // assert that the "lions" header is on the DOM
//   getByText(/tigers/i);
// });

// test('Tigers header is found', () => {
//   const { getByText } = render(<App />);

//   // assert that the "lions" header is on the DOM
//   getByText(/tigers/i);
// });
