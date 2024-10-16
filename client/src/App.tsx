import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Outlet,
} from "react-router-dom"; // needs to be installed
import Login from "./Pages/LoginPage/Login";
import FinancialNews from "./Pages/News/News";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/HomePage/Home";
import "./App.css";
import SignUp from "./Pages/SignUp/Sign-Up";

import { Search } from "./Pages/Search/search";
import { StockDataPage } from "./Pages/StockDataPage/stockData";

const ProtectedRoute: React.FC<{ loggedIn: boolean }> = ({ loggedIn }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    } 
  }, [loggedIn, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
};

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const onLoggedIn = () => {
      setLoggedIn(true);
    };
    window.addEventListener("auth:login", onLoggedIn);
    return () => {
      window.removeEventListener("auth:login", onLoggedIn);
    };
  }, []);
  console.log("protected", loggedIn);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
       
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<FinancialNews />} />
          <Route path='search' element={<Search />} />
          <Route path="/ticker/:tikerSymbol" element={<StockDataPage />} />
      
       
        
         
          
         
        </Route>
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
