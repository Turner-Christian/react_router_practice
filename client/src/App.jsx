import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Params from './components/Params'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/:word' element={<Params />} />
          <Route path='/:word/:color/:bgColor' element={<Params />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
