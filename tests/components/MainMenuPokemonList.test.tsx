import { describe, expect, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import { MainMenuPokemonList } from '@/components/MainMenuPokemonList'

describe('MainMenuPokemonList Component test', () => {

  test('visible test', () => {
    render(<MainMenuPokemonList />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('text test', () => {
    render(<MainMenuPokemonList />)
    expect(screen.getByText(/POKEMONLIST/i)).toBeInTheDocument()
  })

})