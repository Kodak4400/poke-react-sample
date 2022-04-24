import { MainMenuTitle } from '@/components/MainMenuTitle'
import { MainMenuPokemonList } from '@/components/MainMenuPokemonList'

export const MainMenuList = () => {
  return (
    <div className="main-menu-list">
      <MainMenuTitle />
      <MainMenuPokemonList />
    </div>
  )
}