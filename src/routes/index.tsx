import { useEffect } from 'react';
import type { FC } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage'
import { PokemonListPage } from '@/pages/PokemonListPage'

const IndexRoutes: FC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="pokemons" element={<PokemonListPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default IndexRoutes;
