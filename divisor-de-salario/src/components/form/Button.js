import { useEffect, useState } from "react";
import styles from "./Button.module.css";

function Button({text,type , detach = false}){

    const [onDetach, setOnDetach] = useState("")

    useEffect(() => {
        detach ? setOnDetach("detach") : setOnDetach("");
    }, [detach])

    return(
        <button type={type} className={`${styles.button} ${styles[onDetach]}`}>{text}</button>
    );
};

export default Button;