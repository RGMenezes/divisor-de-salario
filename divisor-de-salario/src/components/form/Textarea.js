import { useEffect, useState } from "react";
import styles from "./Textarea.module.css";

function Textarea({cols, rows, text, recize = true, minLength = "0", maxLength = ""}){

    const [enableResize, setEnableResize] = useState("no_recize");

    useEffect(() => {
        if(recize){
            setEnableResize("");
        };
    }, [recize])

    return(
        <textarea 
            className={`${styles.textarea} ${styles[enableResize]}`} 
            defaultValue={text} cols={cols} rows={rows}
            minLength={minLength} maxLength={maxLength}
        >
        </textarea>
    );
};

export default Textarea;