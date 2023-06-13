import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState } from "react";

import styles from "./App.module.css"

import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";

function App() {

  const [themeMode, setThemeMode] = useState("light");
  const [darkMode, setdarkMode] = useState(false);
  const [userRouter, setUserRouter] = useState("login");

  const [alert, setAlert] = useState(false);

  function reRenderAlert(){
    setAlert(true);
    setTimeout(() => setAlert(false), 50);
  };

  return (
    <Router>
      <div onSubmit={reRenderAlert} className={`${styles[themeMode]}`}>
        <Alert reRender={alert} />

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