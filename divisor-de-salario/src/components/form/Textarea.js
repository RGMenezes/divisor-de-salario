import { useEffect, useState } from "react";
import styles from "./Textarea.module.css";

function Textarea({cols, rows, text, recize = true}){

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
        >
        </textarea>
    );
};

export default Textarea;