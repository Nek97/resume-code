import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the home navigation link', () => {
  render(<App />)
  expect(screen.getByText(/home/i)).toBeInTheDocument()
})
