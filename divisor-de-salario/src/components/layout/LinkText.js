import { Link } from "react-router-dom";

import styles from "./LinkText.module.css";

function LinkText({to, text}){
    return(
        <Link className={styles.link} to={to}>{text}</Link>
    );
};

export default LinkText;