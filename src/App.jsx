import React from 'react'
import AllServices from './components/AllServices'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ConstructionWork from './components/ConstructionWork';
import Home from './components/Home';
import Person from './components/Person';
import Mouse from './components/Mouse';
import Animation from './components/Animation';
import Button from './components/Button';
import Navber from './components/Navber';
import Banner from './components/Banner';
import Cards from './components/Cards';

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/allservices' element={<AllServices/>}></Route>
      <Route path='/constructionwork' element={<ConstructionWork/>}></Route>
      <Route path='/person' element={<Person/>}></Route>
      <Route path='/mouse' element={<Mouse/>}></Route>
      <Route path='/animation' element={<Animation/>}></Route>
      <Route path='/button' element={<Button/>}></Route>
      <Route path='/navber' element={<Navber/>}></Route>
      <Route path='/banner' element={<Banner/>}></Route>
      <Route path='/cards' element={<Cards/>}></Route>


    </Routes>
   </Router>
  )
}

export default App
