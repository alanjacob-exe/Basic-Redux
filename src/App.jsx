import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import DarkSlice from './Reducers/DarkSlice'
import { configureStore } from '@reduxjs/toolkit';

import './App.css'
import Home from './Pages/Home'

const store = configureStore({
  reducer: {
    isDarkMode: DarkSlice, // Add the counterReducer to the store under the 'counter' key
    // Add other reducers here if needed
  },
});


function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Provider>

    </BrowserRouter>
  )
}

export default App
