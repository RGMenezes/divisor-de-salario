import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/db";

import styles from "./Home.module.css";

import Button from "../form/Button";

function Home({onAlert}){
    const navigate = useNavigate();
    
    const [user, setUser] = useState({});
    const [deleteUser, setDeleteUser] = useState(null);

    useEffect(() => {
        api.get("/find/user").then((res) => {
            if(res.data.type === "success"){
                setUser(res.data.value);
            }else{
                onAlert(res.data.type, res.data.value.message);
                navigate(res.data.redirect);
            };
        }).catch((err) => {
            onAlert("error", "Não foi possível se conectar com o servidor, tente novamente!");
            navigate("/");
        });
    }, [navigate, onAlert]);

    const allowDeletingUser = () => deleteUser ? setDeleteUser(null) : setDeleteUser("popup_active");

    function deleteProfile(){
        api.post("/user", user).then((res) => {
            onAlert(res.data.type, res.data.value.message);
            navigate(res.data.redirect);
        }).catch((err) => {
            console.log(`Erro: ${err}`);
        });
    };

    return(
        <main className={styles.home}>
            <section className={styles.profile} >
                <h1>{user.userName}</h1>
                <p>{user.email}</p>
                <Button 
                    text="Apagar perfil"
                    type="button"
                    handleOnClick={allowDeletingUser}
                />
            </section>

            <section className={styles.divisions}>

            </section>

            <div className={`${styles.popup} ${styles[deleteUser]}`}>
                <p>Deseja realmente deletar este usuário?</p>
                <div className={styles.action_container} >
                    <Button 
                        text="Não"
                        type="button"
                        detach={true}
                        handleOnClick={allowDeletingUser}
                    />
                    <Button 
                        text="Sim"
                        type="button"
                        handleOnClick={deleteProfile}
                    />
                </div>
            </div>
        </main>
    );
};

export default Home;