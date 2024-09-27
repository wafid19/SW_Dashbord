// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
export const ThemeContext = createContext()

// eslint-disable-next-line no-unused-vars, react/prop-types
const ThemContextProvaider = ({children}) => {
    // eslint-disable-next-line no-unused-vars
    const [theme, setTheme] = useState('dark')

    useEffect(()=>{
          if(theme === "dark"){
            document.documentElement.classList.add("dark")
          }else{
            document.documentElement.classList.remove('dark')
          }
    }, [theme])

    // eslint-disable-next-line no-unused-vars
    const toggleTheme =()=>{
        setTheme(theme === "light" ? 'dark' : 'light')
    }
  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemContextProvaider