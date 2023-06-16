import { useEffect, useState } from "react";
import styles from "./Graphic.module.css";

function Graphic({division}){
    const [circle, setCircle] = useState([]);
    
    useEffect(() => {
        const porcentage = (total, value) => (value * 100) / total;
        const strokePorcentage = (value) => (value * 220) / 100;
        let newCircle = [];
        const color = [
            "#FF6384",
            "#36A2EB", 
            "#FFCE56", 
            "#4BC0C0", 
            "#9966FF", 
            "#FF9F40", 
            "#00B8A9",
            "#F6416C",
            "#9EEBCF",
            "#FFD700"
        ];

        let currStroke = 220;

        for(let element of division){
            let valueCategory = division.reduce((acc, curr) => acc + curr[1], 0);
            currStroke -= strokePorcentage(porcentage(valueCategory, valueCategory - element[1]));
            newCircle.push([
                currStroke,
                color[division.indexOf(element)]
            ]);
        };

        setCircle(newCircle.reverse());
    },[division]);
    

    return(
        <svg 
            className={styles.graphic}
            viewBox="0 0 100 100" 
        >
            {circle.map((element) => (
                <circle cx="50" cy="50" r="35" stroke={element[1]} strokeWidth={15} 
                key={element[1]} strokeDasharray={220} strokeDashoffset={element[0]}/>
            ))}
        </svg>
    );
};

export default Graphic;