import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Header.module.css";

import Logo from "../assets/Logo";

import LinkButton from "./LinkButton";
import LinkText from "./LinkText";

function Header({type = "standard", setType, dark, setDark, setTheme}){
    
    const location = useLocation();
    
    useEffect(() => {

        if(location.pathname === "/"){
            setType("login");
        }else if(location.pathname === "/register"){
            setType("register")
        }else{
            setType("standard")
        };
    }, [type, location.pathname, setType]);
    
    const [themeButton, setThemeButton] = useState(5);

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

    const keyDown = (event) => event.keyCode === 13 && changeTheme();

    return(
        <header className={styles.header} >
            <div className={styles.logo}>
                <Logo />
            </div>
            <div className={styles.action_container}>
                <svg 
                    onClick={changeTheme} 
                    onKeyDown={keyDown} 
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
                { type === "standard" && (
                    <nav>
                        <LinkText to="/divisions" text="Divisões" />
                        <LinkText to="/newdivision" text="Nova divisão" />
                    </nav>
                )} 
            </div>
        </header>
    );
};

export default Header;