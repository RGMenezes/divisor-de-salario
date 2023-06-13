import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/db";

import styles from "./Register.module.css";

import Input from "../form/Input";
import Button from "../form/Button";
import LinkText from "../layout/LinkText";

function Register({onAlert}){

    const navigate = useNavigate()
    const [user, setUser] = useState({});

    function submit(e){
        e.preventDefault();

        if(user.password === user.passwordConfirm){
            api.post("/register", {user: user}).then((res) => {
                onAlert(res.data.type, res.data.value.message);
                navigate(res.data.redirect);
            }).catch((err) => {
                onAlert("error", "Não foi possível acessar o servidor para concluir o cadastro, tente novamente!");
                navigate("/");
            });
        }else{
            onAlert("error", "As senha não são iguais, tente novamente!");
            navigate("/register");
        };

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