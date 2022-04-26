import { MainTitle } from "@/components/MainTitle"
import { MainMenuList } from "@/components/MainMenuList"
import './MainPage.css'

export const MainPage = () => {
  return (
    <div className="main-page">
      <MainTitle />
      <MainMenuList />
    </div>
  )
}