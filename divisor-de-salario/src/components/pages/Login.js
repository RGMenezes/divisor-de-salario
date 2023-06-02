import styles from "./Login.module.css";

import Input from "../form/Input";
import Submit from "../form/Submit";

import LinkText from "../layout/LinkText";

function Login(){
    return (
        <div className={styles.login_container}>
            <form autoComplete="on" className={styles.login}>
                <h1>Login</h1>
                <p>Entre e aproveite nossos serviços.</p>
                <Input
                    id="email"
                    type="email"
                    text="E-mail"
                    placeholder="Digite seu e-mail."
                />
                <Input
                    id="password"
                    type="password"
                    text="Senha"
                    placeholder="Digite sua senha."
                />
                <div className={styles.action_container}>
                    <LinkText to="/register" text="Inscrever-se" />
                    <Submit text="Entrar" detach={true} />
                </div>
            </form>
        </div>
    );
};

export default Login;