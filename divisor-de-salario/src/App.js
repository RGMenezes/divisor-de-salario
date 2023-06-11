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

  function teste(){
    api.post('/posts', {message: "A mensagem foi enviada do front para o back"}).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log("Houve um erro "+err);
    });
  };


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

        <button onClick={teste} > teste</button>

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