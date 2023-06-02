import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Header.module.css";

import logo from "../../assets/logo/logo.svg";

import LinkButton from "./LinkButton";

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
    
    const [themeButton, setThemeButton] = useState(25);

    function changeTheme(){
        if(!dark){
            setThemeButton(75);
            setTheme("dark");
            setDark(!dark);
        }else{
            setThemeButton(25);
            setTheme("ligth");
            setDark(!dark);
        };
    };

    const keyDown = (event) => event.keyCode === 13 && changeTheme();

    return(
        <header className={styles.header} >
            <img className={styles.logo} src={logo} alt="logo do site" />
            <div>
                <svg 
                    onClick={changeTheme} 
                    onKeyDown={keyDown} 
                    tabIndex={0} 
                    className={styles.theme_buttom} 
                    viewBox="0 0 100 50"
                >
                    <circle r="20" cx={themeButton} cy="25" />
                </svg>
                { type === "login" && (
                    <LinkButton to="/register" text="Inscrever-se" />
                )} 
                { type === "register" && (
                    <LinkButton to="/" text="Login" />
                )} 
                { type === "standard" && (
                    <nav>

                    </nav>
                )} 
            </div>
        </header>
    );
};

export default Header;