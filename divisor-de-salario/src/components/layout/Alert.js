import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/db"

import styles from "./Alert.module.css";

function Alert({reRender}){
    const navigate = useNavigate()
    
    const [fade, setFade] = useState("");
    const [text, setText] = useState("");
    const [type, setType] = useState("");

    useEffect(() => {
        api.get("/alert").then((res) => {
            if(res.data.value.message){
                setText(res.data.value.message);
                setType(res.data.type);
                navigate(res.data.redirect);

                setFade("fade");
                setTimeout(() => {
                    setFade("");
                },2*1000);
            };
        }).catch((err) => {
            console.log("Erro: "+err);
        });
    }, [navigate, reRender]);


    return(
        <div className={`${styles.boxAlert} ${styles[type]} ${styles[fade]}`}> {text} </div>
    );
};

export default Alert;