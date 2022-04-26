import { PokemonNo } from '@/components/PokemonNo'
import { PokemonImg } from '@/components/PokemonImg'
import { PokemonName } from '@/components/PokemonName'

export const Pokemon = () => {
  return (
    <div>
      <PokemonNo />
      <PokemonImg />
      <PokemonName />
    </div>
  )
}