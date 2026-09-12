import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'

const mainStyle = {
  maxWidth: "700px",
  margin: "0 auto",
  padding: "2rem 1.5rem",
  textAlign: "center"
}

const sectionStyle = {
  marginBottom: "2rem"
}

const movieListStyle = {
  listStyle: "none",
  margin: "0",
  padding: "0",
  display: "grid",
  gap: "0.5rem"
}


function App() {

const favoriteMovies = [
  'Fast and Furious Series',
  'Harry Potter Series',
  'Interstellar',
  'Whiplash'
]
  return (
    <div className="App">
      <Header name="Riley Temme">
        <Nav></Nav>
      </Header>
      <main style={mainStyle}>
        <section style={sectionStyle}>
          <h2>About Me</h2>
          <p>Hello! I'm Riley Temme, a student at FVTC for Web Development and Design.</p>
        </section>
        <section style={sectionStyle}>
          <h2>Favorite Movies</h2>
          <ul style={movieListStyle}>
            {favoriteMovies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
