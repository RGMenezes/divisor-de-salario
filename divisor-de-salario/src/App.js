import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState } from "react";

import styles from "./App.module.css"

import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import NewDivision from "./components/pages/NewDivision";
import Divisions from "./components/pages/Divisions";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";

function App() {

  const [themeMode, setThemeMode] = useState("light");
  const [darkMode, setdarkMode] = useState(false);
  const [userRouter, setUserRouter] = useState("login");

  const [alert, setAlert] = useState(false);

  function alertActive(type, message){
    setAlert({type: type, message: message});
    setTimeout(() => setAlert(false), 10);
  };

  return (
    <Router>
      <div className={`${styles[themeMode]}`}>
        <Alert onActive={alert} />

        <Header 
          type={userRouter} 
          setType={setUserRouter}
          dark={darkMode} 
          setDark={setdarkMode} 
          setTheme={setThemeMode}
          onAlert={alertActive} 
        />

        <Routes>
          <Route path="/" element={<Login onAlert={alertActive} />} />
          <Route path="/register" element={<Register onAlert={alertActive} />} />
          <Route path="/home" element={<Home onAlert={alertActive} />} />
          <Route path="/divisions" element={<NewDivision />} />
          <Route path="/newdivision" element={<Divisions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;