import React from 'react'
import Home from './components/Home'
import {Routes,Route} from "react-router-dom"
import Singlemovie from './components/Singlemovie';
import Error from './components/Error';
import "./App.css"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Singlemovie />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App