import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useEffect, useState } from "react";

import api from "./api/db"

import styles from "./App.module.css"

import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {

  const [themeMode, setThemeMode] = useState("light");
  const [darkMode, setdarkMode] = useState(false);
  const [userRouter, setUserRouter] = useState("login");

  useEffect(() => {
    api.get('/').then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log("Houve um erro "+err);
    });
  }, []);


  return (
    <Router>
      <div className={`${styles[themeMode]}`}>
        <Header 
          type={userRouter} 
          setType={setUserRouter}
          dark={darkMode} 
          setDark={setdarkMode} 
          setTheme={setThemeMode} 
        />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;