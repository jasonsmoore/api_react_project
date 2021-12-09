import React, { useState } from 'react';
import Home from './Home';
import MovieInfo from './MovieInfo';
import { render, screen } from '@testing-library/react';
import App from './App'
import Router, { BrowserRouter } from 'react-router-dom'

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

test('renders movie info', () => {
  const favorite = [
    {
      "adult": false,
      "backdrop_path": "/6KJcFFE1iBPC0Xj0iPCcmMvS5WK.jpg",
      "genre_ids": [
        14,
        28,
        35,
        80
      ],
      "id": 49524,
      "original_language": "en",
      "original_title": "R.I.P.D.",
      "overview": "A recently slain cop joins a team of undead police officers working for the Rest in Peace Department and tries to find the man who murdered him. Based on the comic by Peter M. Lenkov.",
      "popularity": 50.374,
      "poster_path": "/fQ7CI5zmmhZlHuYBFKgK9w4hwlS.jpg",
      "release_date": "2013-07-18",
      "title": "R.I.P.D.",
      "video": false,
      "vote_average": 5.8,
      "vote_count": 3018
    }
  ]
  jest.spyOn(Router, 'useParams').mockReturnValue({ movieId: '0' })
  render(<BrowserRouter><MovieInfo favorite={favorite} /></BrowserRouter>);
  const linkElement = screen.getByText(/recently slain cop/);
  expect(linkElement).toBeInTheDocument();
});

test('render header', () => {
  render(<App />);
  const words = screen.getByText('KBDB');
  expect(words).toBeInTheDocument();
})

test('render button', () => {
  render(<App />);
  const button = screen.getAllByRole('button', { name: 'Search' });
  expect(button[0]).toBeInTheDocument();
})

test('render input Release Date', () => {
  render(<App />);
  const input = screen.getByLabelText('Release Date:');
  expect(input).toBeInTheDocument();
})

test('render input search non-bacon movies', () => {
  render(<App />);
  const input = screen.getByLabelText('Search Non-Bacon Movies:');
  expect(input).toBeInTheDocument();
})

test('render input search non-bacon movies', () => {
  render(<App />);
  const input = screen.getByLabelText('Rating:');
  expect(input).toBeInTheDocument();
})

// test('render button for favorites', () => {
//   render(<App />);
//   const button = screen.getByRole('button', { name: 'Add to My Favorites' });
//   expect(button).toBeInTheDocument();
// })