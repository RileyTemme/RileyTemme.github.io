import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const footerStyle = {
    textAlign: "center",
    padding: "1.5rem 1rem"
}

const Footer = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <footer style={footerStyle} className={`footer ${theme}`}>
            <p>&copy; Riley Temme 2026</p>
        </footer>
    )
}


export default Footer
