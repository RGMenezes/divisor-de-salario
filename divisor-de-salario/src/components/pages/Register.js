import { useState } from "react";
import api from "../../api/db";

import styles from "./Register.module.css";

import Input from "../form/Input";
import Button from "../form/Button";
import LinkText from "../layout/LinkText";
import Alert from "../layout/Alert";

function Register(){

    const [user, setUser] = useState({});
    const [alert, setAlert] = useState(false);
    const [messageAlert, setMessageAlert] = useState("");
    const [typeMessageAlert, setTypeMessageAlert] = useState("error");

    function submit(e){
        e.preventDefault();

        if(user.password === user.passwordConfirm){
            api.post("/register", {user: user}).then((res) => {
            
            }).catch((err) => {
                //Fazer o alert do site
            });
        }else{
            setAlert(true);
            setMessageAlert("As senhas não são iguais, tente novamente!");
            setTypeMessageAlert("error");
        };

    };

    function collectData(e){
        setUser({...user, [e.target.name]: e.target.value});
    };

    return (
        <div className={styles.register_container}>
            {alert && <Alert type={typeMessageAlert} text={messageAlert} timeActive={5}/>}

            <form onSubmit={submit} autoComplete="on" className={styles.register}>
                <h1>Registrar</h1>
                <p>Registre-se para ter acesso aos nossos serviços.</p>
                <Input
                    id="userName"
                    type="text"
                    text="Nome de usuário"
                    handleOnChange={collectData}
                    placeholder="Digite seu nome de usuário."
                    required={true}
                />
                <Input
                    id="email"
                    type="email"
                    text="E-mail"
                    handleOnChange={collectData}
                    placeholder="Digite seu e-mail."
                    required={true}
                />
                <Input
                    id="password"
                    type="password"
                    text="Senha"
                    handleOnChange={collectData}
                    placeholder="Digite sua senha."
                    required={true}
                    minLength="8"
                />
                <Input
                    id="passwordConfirm"
                    type="password"
                    text="Comfirmar senha"
                    handleOnChange={collectData}
                    placeholder="Digite sua senha novamente."
                    required={true}
                    minLength="8"
                />
                <div className={styles.action_container}>
                    <LinkText to="/" text="Login" />
                    <Button type="submit" text="Resgistrar" detach={true} />
                </div>
            </form>
        </div>
    );
};

export default Register;