import { useEffect, useRef } from 'react'

const ThemeToggle = ({theme, onToggle}) => {
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
           className="theme-toggle"
           onClick={onToggle}
           aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
       >
           <span className="theme-toggle__knob">{isDark ? "🌙" : "☀️"}</span>
           {isDark ? "Dark" : "Light"}
       </button>
   )
}

export default ThemeToggle
