import { describe, expect, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import { MainTitle } from '@/components/MainTitle'

describe('MainTitle Component test', () => {

  test('visible test', () => {
    render(<MainTitle />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  test('alt text test', () => {
    render(<MainTitle />)
    expect(screen.getByAltText('main title')).toBeInTheDocument()
  })

})