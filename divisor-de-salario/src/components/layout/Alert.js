import { useEffect, useState } from "react";

import styles from "./Alert.module.css";

function Alert({onActive}){
    const [fade, setFade] = useState("");
    const [text, setText] = useState("");
    const [type, setType] = useState("");

    useEffect(() => {
        if(onActive){
            setText(onActive.message);
            setType(onActive.type);
            setFade("fade");
            setTimeout(() => {
                setFade("");
            },3*1000);
        };
    }, [onActive]);


    return(
        <div className={`${styles.boxAlert} ${styles[type]} ${styles[fade]}`}> {text} </div>
    );
};

export default Alert;