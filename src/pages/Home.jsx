import Footer from '../components/Footer'
import MovieList from '../components/MovieList'
import MinecraftItem from '../components/MinecraftItem'
import SectionManager, { useSectionManager } from '../components/SectionManager'

const mainStyle = {
  maxWidth: "700px",
  margin: "0 auto",
  padding: "2rem 1.5rem",
  textAlign: "center"
}

const sectionStyle = {
  marginBottom: "2rem"
}

function Home() {
  const [ sections, dispatch ] = useSectionManager()

  return (
    <>
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
    </>
  )
}

export default Home
