import { useEffect, useState } from "react";
import styles from "./Graphic.module.css";

function Graphic({division, color}){
    const [circle, setCircle] = useState([]);
    
    useEffect(() => {
        const porcentage = (total, value) => (value * 100) / total;
        const strokePorcentage = (value) => (value * 220) / 100;
        let newCircle = [];
        let currStroke = 220;

        for(let element of division){
            currStroke -= strokePorcentage(porcentage(100, element[1]));
            newCircle.push([
                currStroke,
                color[division.indexOf(element)]
            ]);
        };

        setCircle(newCircle.reverse());
    },[division, color]);
    

    return(
        <svg 
            className={styles.graphic}
            viewBox="0 0 100 100" 
        >
            {circle.map((element) => (
                <circle cx="50" cy="50" r="35" stroke={element[1]} strokeWidth={15} 
                key={element[1]} strokeDasharray={220} strokeDashoffset={element[0]}/>
            ))}
            <circle cx="50" cy="50" r="27" className={styles.inner_edge} />
            <circle cx="50" cy="50" r="43" className={styles.inner_edge} />
        </svg>
    );
};

export default Graphic;