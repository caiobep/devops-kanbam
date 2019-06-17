import React from 'react'
import App from './App'
import { render } from '@testing-library/react'

test('Shows Devops Kanban title on application', () => {
  const { getByText } = render(<App />)
  expect(getByText(/devops kanban/i)).toBeInTheDocument()
})
