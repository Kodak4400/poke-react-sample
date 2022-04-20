import { describe, expect, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import App from '@/App'

describe('Simple working test', () => {
  test('should render correctly', () => {
    const {container} = render(<App />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('the title is visible', () => {
    render(<App />)
    expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument()
  })

  test('should increment count on click', async () => {
    render(<App />)
    fireEvent.click(screen.getByRole('button'))
    expect(await screen.findByText(/count is: 1/i)).not.toBeEmptyDOMElement()
  })
})
