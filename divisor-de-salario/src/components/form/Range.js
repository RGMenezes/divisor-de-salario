import { useState } from "react";
import styles from "./Range.module.css";

function Range({min, max}){

    const [showValue, setShowValue] = useState(50);

    function changeRange(e){
        setShowValue(Number(e.target.value));
    };

    return(
        <div className={styles.range_container} >
            <input className={styles.range} type="range" min={min} max={max} onChange={changeRange}/>
            <span className={styles.text_value}>{showValue}</span>
        </div>
    );
};

export default Range;