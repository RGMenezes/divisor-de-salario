import { useNavigate } from "react-router-dom";
import { BsTrashFill } from "react-icons/bs";
import api from "../../api/db";

import styles from "./CardGraphic.module.css";

import Graphic from "./Graphic";

function CardGraphic({name, division, amount, onAlert}){

    const navigate = useNavigate();

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

    const divisionReduce = division.reduce((acc, cur) => acc + cur[1], 0)
    division.map(el => el[1] = (el[1] * 100) / divisionReduce.toFixed());

    let valueCategory = [];
    division.forEach(el => {
        const porcentage = (total, value) => (value * total) / 100;
        let value = porcentage(amount, el[1])
        valueCategory.push(value.toFixed(0));
    });

    function deleteDivision(){
        api.put("/delete/division", {name: name, division: division, amount: amount}).then((res) => {
            
        }).catch((err) => {
            onAlert("error", "Não foi possível deletar esta divisão, tente novamente!");
        });
    };

    return(
        <section className={styles.card}>

            <div onClick={deleteDivision} className={styles.trash_fill}>
                <BsTrashFill />
            </div>

            <h2>{name}</h2>
            <h4>Valor: {amount}</h4>

            <div className={styles.graphic}>
                <Graphic
                    color={color}
                    division={division}
                />
            </div>

            <div className={styles.subtitle_container}>
                {division.map((element) => (
                    <div key={element[2]} className={styles.subtitle} >
                        <svg viewBox="0 0 100 100">
                            <rect x="5" y="5" width="90" height="90" 
                            fill={color[division.indexOf(element)]} />
                        </svg>
                        <div>
                            <p>{element[0]}</p>
                            <p>Valor: {valueCategory[division.indexOf(element)]}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CardGraphic;