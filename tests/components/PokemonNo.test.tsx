import { describe, expect, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import { PokemonNo } from '@/components/PokemonNo'

describe('PokemonNo Component test', () => {

  test('text test', () => {
    render(<PokemonNo />)
    expect(screen.getByText(/No./i)).toBeInTheDocument()
  })

})