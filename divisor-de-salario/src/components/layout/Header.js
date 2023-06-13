import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../api/db";

import styles from "./Header.module.css";

import Logo from "../assets/Logo";

import LinkButton from "./LinkButton";
import LinkText from "./LinkText";

function Header({type = "standard", setType, dark, setDark, setTheme, onAlert}){
    
    const location = useLocation();
    const navigate = useNavigate();
    
    const [themeButton, setThemeButton] = useState(5);
    
    const keyDownSelector = (event) => event.keyCode === 13 && changeTheme();
    const keyDownLogout = (event) => event.keyCode === 13 && logout();
    const keyDownLogin = (event) => event.keyCode === 13 && login();
    const keyDownRegister = (event) => event.keyCode === 13 && register();

    useEffect(() => {
        
        if(location.pathname === "/"){
            setType("login");
        }else if(location.pathname === "/register"){
            setType("register")
        }else if(location.pathname === "/home"){
            setType("home")
        }else if(location.pathname === "/newdivision"){
            setType("newdivision")
        }else{
            setType("divisions")
        };
    }, [type, location.pathname, setType]);
    
    function changeTheme(){
        if(!dark){
            setThemeButton(55);
            setTheme("dark");
            setDark(!dark);
        }else{
            setThemeButton(5);
            setTheme("ligth");
            setDark(!dark);
        };
    };
    
    function logout(){
        api.get("/logout",).then((res) => {
            if(res.data.type === "success"){
                onAlert(res.data.type, res.data.value.message);
                navigate(res.data.redirect);
            }else{
                onAlert(res.data.type, res.data.value.message);
                navigate(res.data.redirect);
            };
        }).catch((err) => {
            console.log(`Erro: ${err}`);
        });
    };
    
    const login = () => navigate("/");
    const register = () => navigate("/register");
    

    return(
        <header className={styles.header} >
            { type === "login" && (
                <div className={styles.logo}>
                    <Logo onKeyDown={keyDownRegister} handleOnClick={register} />
                </div>
            )} 
            { type === "register" && (
                <div className={styles.logo}>
                    <Logo onKeyDown={keyDownLogin} handleOnClick={login} />
                </div>
            )} 
            { type === "home" && (
                <div className={styles.logo}>
                    <Logo onKeyDown={keyDownLogout} handleOnClick={logout} />
                </div>
            )} 
            { type === "newdivision" && (
                <div className={styles.logo}>
                    <Logo onKeyDown={keyDownLogout} handleOnClick={logout} />
                </div>
            )} 
            { type === "divisions" && (
                <div className={styles.logo}>
                    <Logo onKeyDown={keyDownLogout} handleOnClick={logout} />
                </div>
            )} 
            <div className={styles.action_container}>
                <svg 
                    onClick={changeTheme} 
                    onKeyDown={keyDownSelector} 
                    tabIndex={0} 
                    className={styles.theme_buttom} 
                    viewBox="0 0 100 50"
                >
                    <rect width={40} height={40} x={themeButton} y="5" />
                </svg>
                { type === "login" && (
                    <LinkButton to="/register" text="Inscrever-se" />
                )} 
                { type === "register" && (
                    <LinkButton to="/" text="Login" />
                )} 
                { type === "home" && (
                    <nav>
                        <LinkText to="/divisions" text="Divisões" />
                        <LinkText to="/newdivision" text="Nova divisão" />
                    </nav>
                )} 
                { type === "newdivision" && (
                    <nav>
                        <LinkText to="/divisions" text="Divisões" />
                        <LinkText to="/home" text="Home" />
                    </nav>
                )} 
                { type === "divisions" && (
                    <nav>
                        <LinkText to="/newdivision" text="Nova divisão" />
                        <LinkText to="/home" text="Home" />
                    </nav>
                )} 
            </div>
        </header>
    );
};

export default Header;