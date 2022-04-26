import { describe, expect, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import { PokemonName } from '@/components/PokemonName'

describe('PokemonName Component test', () => {

  test('text test', () => {
    render(<PokemonName />)
    expect(screen.getByText(/CLEFAIRY/i)).toBeInTheDocument()
  })

})