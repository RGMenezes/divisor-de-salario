import { useState } from "react";
import api from "../../api/db";

import styles from "./Login.module.css";

import Input from "../form/Input";
import Button from "../form/Button";

import LinkText from "../layout/LinkText";

function Login(){

    const [user, setUser] = useState({});

    function submit(e){
        e.preventDefault();

        api.post("/login", user,).then((res) => {
            //tratar a resposta do servidor
        }).catch((err) => {
            //fazer o alert do site  
        });
    };

    function collectData(e){
        setUser({...user, [e.target.name]: e.target.value});
    };

    return (
        <div className={styles.login_container}>
            <form onSubmit={submit} autoComplete="on" className={styles.login}>
                <h1>Login</h1>
                <p>Entre e aproveite nossos serviços.</p>
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
                />
                <div className={styles.action_container}>
                    <LinkText to="/register" text="Inscrever-se" />
                    <Button type="submit" text="Entrar" detach={true} />
                </div>
            </form>
        </div>
    );
};

export default Login;