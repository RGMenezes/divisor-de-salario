import { useEffect, useState } from "react";
import styles from "./Button.module.css";

function Button({text,type , detach = false, handleOnClick}){

    const [onDetach, setOnDetach] = useState("")

    useEffect(() => {
        detach ? setOnDetach("detach") : setOnDetach("");
    }, [detach])

    return(
        <button onClick={handleOnClick} type={type} className={`${styles.button} ${styles[onDetach]}`}>{text}</button>
    );
};

export default Button;