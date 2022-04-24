import { describe, expect, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import { MainMenuTitle } from '@/components/MainMenuTitle'

describe('MainMenuTitle Component test', () => {

  test('text test', () => {
    render(<MainMenuTitle />)
    expect(screen.getByText(/MENU/i)).toBeInTheDocument()
  })

})