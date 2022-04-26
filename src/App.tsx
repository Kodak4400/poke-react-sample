import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainPage } from '@/pages/MainPage'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
