import { useEffect, useState } from "react";
import styles from "./Submit.module.css";

function Submit({text, detach = false}){

    const [onDetach, setOnDetach] = useState("")

    useEffect(() => {
        detach ? setOnDetach("detach") : setOnDetach("");
    }, [detach])

    return(
        <input type="submit" className={`${styles.button} ${styles[onDetach]}`} value={text} />
    );
};

export default Submit;