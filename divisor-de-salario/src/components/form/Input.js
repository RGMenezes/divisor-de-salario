import styles from "./Input.module.css";

function Input({id, text, placeholder, type, handleOnChange, required}){
    return(
        <div>
            {required ? (<div className={styles.input_container}>
                <label htmlFor={id} >{text}:</label>
                <input onChange={handleOnChange} type={type} id={id} name={id} placeholder={placeholder} autoComplete="on" required />
            </div>) : (<div className={styles.input_container}>
                <label htmlFor={id} >{text}:</label>
            <input onChange={handleOnChange} type={type} id={id} name={id} placeholder={placeholder} autoComplete="on" />
            </div>) }
        </div>
    );
};

export default Input;