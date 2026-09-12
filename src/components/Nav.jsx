const navStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    listStyleType: "none",
    gap: "0.5rem",
    margin: "1.5rem 0 0",
    padding: "0"
}

const navItemStyle = {
    backgroundColor: "var(--bg-accent)",
    border: "1px solid #d7dde3",
    borderRadius: "6px",
    margin: "0",
    transition: "background-color 160ms ease, border-color 160ms ease, transform 160ms ease"
}

const navLinkStyle = {
    display: "block",
    fontSize: "1rem",
    padding: "0.7rem 1.25rem"
}


const Nav = () => {
    return (
        <nav>
            <ul style={navStyle} className="nav">
                <li style={navItemStyle}><a style={navLinkStyle} href="/">Home</a></li>
                <li style={navItemStyle}><a style={navLinkStyle} href="/">Projects</a></li>
                <li style={navItemStyle}><a style={navLinkStyle} href="/">Contact</a></li>
            </ul>
        </nav>
    )
}


export default Nav