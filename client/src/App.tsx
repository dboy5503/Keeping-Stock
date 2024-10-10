
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' // needs to be installed
import Home from './Components/HomePage/Home'
import Login from './Components/Login/Login'
import FinancialNews from './Components/News/News'
import SavedStocks from './Components/SavedStocks/Saved-Stocks'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import './App.css'










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
