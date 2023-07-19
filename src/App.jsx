import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import { ThemeProvider } from './ThemeContext'
import Home from './Pages/Home'

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
