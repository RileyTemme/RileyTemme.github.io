import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
