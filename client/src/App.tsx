
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' // needs to be installed
import Home from './Pages/Home'
import Login from './Pages/Login'
import FinancialNews from './Pages/News'
import SavedStocks from './Pages/Saved-Stocks'

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
