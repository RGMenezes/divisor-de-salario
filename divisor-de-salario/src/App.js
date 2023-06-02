import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState } from "react";

import styles from "./App.module.css"

import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {

  const [themeMode, setThemeMode] = useState("light");
  const [darkMode, setdarkMode] = useState(false);
  const [userRouter, setUserRouter] = useState("login");


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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;