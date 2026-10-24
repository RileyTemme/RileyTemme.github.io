import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem("theme") === "dark" ? "dark" : "light"
        } catch {
            return "light"
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem("theme", theme)
        } catch {}
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
