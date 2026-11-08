import { useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext'
import Header from './components/header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Github from './components/GitHubCorner'
import MovieList from './components/MovieList'
import MinecraftItem from './components/MinecraftItem'
import ThemeToggle from './components/ThemeToggle'
import SectionManager, { useSectionManager } from './components/SectionManager'

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
  const { theme } = useContext(ThemeContext)
  const [ sections, dispatch ] = useSectionManager()

  return (
    <div className={`App ${theme}`}>
      <Github repoUrl={"https://github.com/RileyTemme/RileyTemme.github.io"}></Github>
      <Header name="Riley Temme">
        <Nav></Nav>
        <ThemeToggle></ThemeToggle>
      </Header>
      <SectionManager dispatch={dispatch} />
      <main style={mainStyle}>
        {sections.showAbout && (
          <section style={sectionStyle}>
            <h2>About Me</h2>
            <p>Hello! I'm Riley Temme, a student at FVTC for Web Development and Design.</p>
          </section>
        )}
        {sections.showFavorites && <MovieList></MovieList>}
        <section style={sectionStyle}>
          <MinecraftItem></MinecraftItem>
        </section>
      </main>
      {sections.showContact && <Footer />}
    </div>
  )
}

export default App
