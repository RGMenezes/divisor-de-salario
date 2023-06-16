import styles from "./Textarea.module.css";

function Textarea({cols, rows, text}){
    return(
        <textarea className={styles.textarea} defaultValue={text} cols={cols} rows={rows}></textarea>
    );
};

export default Textarea;