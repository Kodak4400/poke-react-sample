import { describe, expect, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';

import { MainMenuPokemonList } from '@/components/MainMenuPokemonList'


describe('MainMenuPokemonList Component test', () => {
  const history = createMemoryHistory()

  beforeAll(() => {
    history.push('/')
  })

  test('visible test', () => {
    render(
      <Router location={history.location} navigator={history}>
        <MainMenuPokemonList />
      </Router>
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('text test', () => {
    render(
      <Router location={history.location} navigator={history}>
        <MainMenuPokemonList />
      </Router>
    )
    expect(screen.getByText(/POKEMONLIST/i)).toBeInTheDocument()
  })

  test('button on click', async () => {
    render(
      <Router location={history.location} navigator={history}>
        <MainMenuPokemonList />
      </Router>
    )
    fireEvent.click(screen.getByRole('button'))
    expect(history.location.pathname).toBe('/pokemons')
  })
})