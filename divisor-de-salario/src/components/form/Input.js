import styles from "./Input.module.css";

function Input({id, text, placeholder, type}){
    return(
        <div className={styles.input_container}>
            <label htmlFor={id} >{text}:</label>
            <input type={type} id={id} name={id} placeholder={placeholder} autoComplete="on" required />
        </div>
    );
};

export default Input;