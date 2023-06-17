import styles from "./Input.module.css";

function Input({
        id, 
        text, 
        placeholder, 
        type, 
        handleOnChange, 
        required, 
        minLength = "0",
        maxLength = "", 
        min = "0",
        max = ""
    }){

    return(
        <div>
            {required ? (<div className={styles.input_container}>
                <label htmlFor={id} >{text}:</label>
                <input 
                    onChange={handleOnChange} 
                    type={type} 
                    id={id} 
                    name={id} 
                    placeholder={placeholder} 
                    autoComplete="on" 
                    required 
                    minLength={minLength}
                    maxLength={maxLength} 
                    min={min}
                    max={max}
                />
            </div>) : (<div className={styles.input_container}>
                <label htmlFor={id} >{text}:</label>
                <input 
                    onChange={handleOnChange} 
                    type={type} 
                    id={id} 
                    name={id} 
                    placeholder={placeholder} 
                    autoComplete="on" 
                    minLength={minLength}
                    maxLength={maxLength} 
                    min={min}
                    max={max}
                />
            </div>) }
        </div>
    );
};

export default Input;