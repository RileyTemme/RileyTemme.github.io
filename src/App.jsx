import { useState, useEffect } from 'react'
import Header from './components/header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Github from './components/GitHubCorner'
import MovieList from './components/MovieList'
import ThemeToggle from './components/ThemeToggle'

const mainStyle = {
  maxWidth: "700px",
  margin: "0 auto",
  padding: "2rem 1.5rem",
  textAlign: "center"
}

const sectionStyle = {
  marginBottom: "2rem"
}

function App() {

  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark" ? "dark" : "light"
    } catch {
      return "light"
    }
  })

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    try {
      localStorage.setItem("theme", theme)
    } catch {}
  }, [theme])

  const toggleTheme = () => setTheme(e => (e === "light" ? "dark" : "light"))

  return (
    <div className="App">
      <Github repoUrl={"https://github.com/RileyTemme/RileyTemme.github.io"}></Github>
      <Header name="Riley Temme">
        <Nav></Nav>
        <ThemeToggle theme={theme} onToggle={toggleTheme}></ThemeToggle>
      </Header>
      <main style={mainStyle}>
        <section style={sectionStyle}>
          <h2>About Me</h2>
          <p>Hello! I'm Riley Temme, a student at FVTC for Web Development and Design.</p>
        </section>
        <MovieList></MovieList>
      </main>
      <Footer />
    </div>
  )
}

export default App
