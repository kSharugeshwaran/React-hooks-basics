
import { createContext, useState } from 'react'
import './App.css'
import UseContext from './components/UseContext'

export const ToggleTheme = createContext(false)


function App() {
  return (
    <>
        <UseContext/>
    </>
  )
}

export default App