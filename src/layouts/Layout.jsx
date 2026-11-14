import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Github from '../components/GitHubCorner'
import ThemeToggle from '../components/ThemeToggle'

function Layout() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme}`}>
      <Github repoUrl={"https://github.com/RileyTemme/RileyTemme.github.io"}></Github>
      <Header name="Riley Temme">
        <Nav></Nav>
        <ThemeToggle></ThemeToggle>
      </Header>
      <Outlet />
    </div>
  )
}

export default Layout
