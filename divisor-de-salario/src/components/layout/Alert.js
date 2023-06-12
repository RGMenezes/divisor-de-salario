import { useEffect, useState } from "react";
import styles from "./Alert.module.css";

function Alert({type, text, timeActive}){
    const [fade, setFade] = useState("");
        useEffect(() => {
            setTimeout(() => {
                setFade("fade");
                setTimeout(() => {
                    setFade("");
                },timeActive*1000);
            },50)
        }, []);
    return(
        <div className={`${styles.boxAlert} ${styles[type]} ${styles[fade]}`}> {text} </div>
    );
};

export default Alert;