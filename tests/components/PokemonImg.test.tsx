import { describe, expect, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import { PokemonImg } from '@/components/PokemonImg'

describe('PokemonImg Component test', () => {

  test('visible test', () => {
    render(<PokemonImg />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  test('alt text test', () => {
    render(<PokemonImg />)
    expect(screen.getByAltText('clefairy')).toBeInTheDocument()
  })

})