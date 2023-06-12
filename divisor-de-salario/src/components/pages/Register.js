import { useState } from "react";
import api from "../../api/db";

import styles from "./Register.module.css";

import Input from "../form/Input";
import Button from "../form/Button";
import LinkText from "../layout/LinkText";

function Register(){

    const [user, setUser] = useState({});

    function submit(e){
        e.preventDefault();

        api.post("/register", {user: user}).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            //Fazer o alert do site
        });
    };

    function collectData(e){
        setUser({...user, [e.target.name]: e.target.value});
    };

    return (
        <div className={styles.register_container}>
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
                />
                <Input
                    id="passwordConfirm"
                    type="password"
                    text="Comfirmar senha"
                    handleOnChange={collectData}
                    placeholder="Digite sua senha novamente."
                    required={true}
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