import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainPage } from '@/pages/MainPage'
import { PokemonListPage } from '@/pages/PokemonListPage'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="pokemons" element={<PokemonListPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
