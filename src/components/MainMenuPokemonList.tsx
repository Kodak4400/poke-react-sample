import { useNavigate } from "react-router-dom"

export const MainMenuPokemonList = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/pokemons")
  }

  return (
    <button className="main-menu-pokemon-list" onClick={handleClick}>POKEMONLIST</button>
  )
}