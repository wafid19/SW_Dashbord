// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { ThemeContext } from '../context/ThemContextProvaider'


const Navbar = () => {

  // eslint-disable-next-line no-unused-vars
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div className='bg-gray-100 text-gray-900 border-b border-gray-300 justify-between p-4 flex items-center  dark:bg-gray-900 dark:border-gray-600 dark:text-white'>
        <h1>Dashbord</h1>
        <button className='text-2xl text-dark' onClick={toggleTheme}>
          {theme === "light" ? <FaMoon/> : <FaSun/>}
        </button>
    </div>
  )
}

export default Navbar