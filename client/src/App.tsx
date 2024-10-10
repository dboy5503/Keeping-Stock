
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' // needs to be installed
import Home from './Components/HomePage/Home'
import Login from './Components/Login/Login'
import FinancialNews from './Components/News/News'
import SavedStocks from './Components/SavedStocks/Saved-Stocks'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import './App.css'

<<<<<<< HEAD
import  {Footer}  from './Componets/Footer/Footer'
import Header from './Componets/Header/Header'

import Home from './Pages/HomePage/Home'
// import Chart from './Pages/chart'
=======
>>>>>>> main









const App: React.FC = () => {
  return (
<<<<<<< HEAD
    <>
    <Header/>
     <Home/>
    
     <Footer/>
     
   
=======
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/news" element={<FinancialNews />} />
      <Route path="/saved-stocks" element={<SavedStocks />} />
    </Routes>
>>>>>>> main

     <Footer />
    </Router>
  )
}

export default App;
