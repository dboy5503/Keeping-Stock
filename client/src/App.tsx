
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import FinancialNews from './Components/News'
import SavedStocks from './Pages/SavedStocks'
import Header from './Components/Header'
import Footer from './Components/Footer'

import './App.css'


  return (
    <>
    <Header/>
     <Home/>
     <Footer/>
    <Chart/>


const App: React.FC = () => {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/news" element={<FinancialNews />} />
      <Route path="/saved-stocks" element={<SavedStocks />} />
    </Routes>

     <Footer />
    </Router>
  )
}

export default App;
