import { useEffect, useState } from "react";
import styles from "./Graphic.module.css";

function Graphic({division, amount}){

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
    const [circle, setCircle] = useState([]);
    
    useEffect(() => {
        const porcentage = (total, value) => (value * 100) / total;
        let newCircle = [];

        for(let element of division){
            let valueCategory = division.reduce((acc, curr) => acc + curr[1], 0);
    
            newCircle.push([]);
            
        };
    },[division])
    

    return(
        <svg 
            className={styles.graphic}
            viewBox="0 0 100 100" 
        >

            <circle cx="50" cy="50" r="35" stroke="#000000" strokeWidth={15} 
            strokeDasharray={220} strokeDashoffset={180}/>


        </svg>
    );
};

export default Graphic;