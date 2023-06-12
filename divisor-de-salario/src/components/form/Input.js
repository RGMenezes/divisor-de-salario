import styles from "./Input.module.css";

function Input({id, text, placeholder, type, handleOnChange, required, minLength = "0", min = "0"}){
    return(
        <div>
            {required ? (<div className={styles.input_container}>
                <label htmlFor={id} >{text}:</label>
                <input onChange={handleOnChange} type={type} id={id} name={id} placeholder={placeholder} autoComplete="on" required minLength={minLength} min={min}/>
            </div>) : (<div className={styles.input_container}>
                <label htmlFor={id} >{text}:</label>
            <input onChange={handleOnChange} type={type} id={id} name={id} placeholder={placeholder} autoComplete="on" minLength={minLength} min={min}/>
            </div>) }
        </div>
    );
};

export default Input;