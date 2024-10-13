import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Outlet,
} from "react-router-dom"; // needs to be installed
import Login from "./Pages/Login/Login";
import FinancialNews from "./Pages/News/News";
import SavedStocks from "./Pages/SavedStocks/Saved-Stocks";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/HomePage/Home";
import "./App.css";

const ProtectedRoute: React.FC<{loggedIn:boolean}> = ({loggedIn}) => {
  const navigate = useNavigate();
  useEffect(() => {

    if(!loggedIn)
      {
        navigate('/login')
      }
  }, [loggedIn, navigate])
  
 
  return (
    <>
      <Outlet />
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
    </>
  );
};

export default App;
