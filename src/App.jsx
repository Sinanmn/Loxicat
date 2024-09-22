import React from 'react'
import AllServices from './components/AllServices'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<AllServices/>}></Route>
    </Routes>
   </Router>
  )
}

export default App
