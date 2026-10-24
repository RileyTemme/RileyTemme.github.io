import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import logoBase from '../assets/RTRoadAmericaHALO.png'
import logoHover from '../assets/RTRoadAmericaHOVER.png'

const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "3rem",
    minHeight: "190px",
    boxSizing: "border-box",
    padding: "1.5rem 2rem"
}

const logoStyle = {
    flex: "0 0 150px",
    margin: "0"
}

const titleStyle = {
    fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
    lineHeight: "1.15",
    margin: "0"
}




const Header = ({name, children}) => {
    const { theme } = useContext(ThemeContext)

    return (
        <div>
            <div style={headerStyle} className={`header ${theme}`}>
                <h1 id="logoLink" aria-label="Home" className="logo" style={logoStyle}>
                    <img
                        id="logoBase"
                        className="logo__layer logo__base"
                        src={logoBase}
                        alt="Riley Temme logo"
                    ></img>
                    <img
                        id="logoHover"
                        className="logo__layer logo__hover"
                        src={logoHover}
                        alt="Riley Temme logo"
                    ></img>
                </h1>
                <h1 style={titleStyle}>
                    {name}'s Homepage
                </h1>
            </div>
            
            {children}
        </div>


    )
}


export default Header