import Card from '../components/Card'

const mainStyle = {
  maxWidth: "700px",
  margin: "0 auto",
  padding: "2rem 1.5rem",
  textAlign: "center"
}

const gridStyle = {
  display: "grid",
  gap: "1rem",
  textAlign: "left"
}

const projects = [
  { id: 1, title: "Mcwilliams Woodworking Co", description: "A simple site for my friends Woodworking business", repoUrl: "https://mcwilliamswoodworking.co" },
  { id: 2, title: "Placeholder Project", description: "description of this project.", repoUrl: "https://github.com/RileyTemme" },
  { id: 3, title: "Placeholder Project", description: "description of this project.", repoUrl: "https://github.com/RileyTemme" }
]

function Projects() {
  return (
    <main style={mainStyle}>
      <h2>Projects</h2>
      <div style={gridStyle}>
        {projects.map(({ id, ...project }) => (
          <Card key={id} {...project} />
        ))}
      </div>
    </main>
  )
}

export default Projects
