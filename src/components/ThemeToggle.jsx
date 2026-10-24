import { useContext, useEffect, useRef } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const ThemeToggle = () => {
   const { theme, setTheme } = useContext(ThemeContext)
   const isDark = theme === "dark"
   const buttonRef = useRef(null)
   const isFirstRender = useRef(true)

   // Return focus to the button after the theme changes (skip the initial mount
   // so the page doesn't steal focus on load).
   useEffect(() => {
       if (isFirstRender.current) {
           isFirstRender.current = false
           return
       }
       buttonRef.current?.focus()
   }, [theme])

   return (
       <button
           ref={buttonRef}
           className={`theme-toggle ${theme}`}
           onClick={() => setTheme(isDark ? "light" : "dark")}
           aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
       >
           <span className="theme-toggle__knob">{isDark ? "🌙" : "☀️"}</span>
           {isDark ? "Light Mode" : "Dark Mode"}
       </button>
   )
}

export default ThemeToggle
