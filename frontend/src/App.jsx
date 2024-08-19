
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './home/Home';
import Height from './components/Height';
import MealPlan from './components/mealplan';
//import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/height" element={<Height />} />
        
        
        <Route path="/mealplan" element={<MealPlan />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </>
  );
}

export default App;
