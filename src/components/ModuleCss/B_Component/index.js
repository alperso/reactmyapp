import React from 'react';
import styles from "./style.module.css";

function B_Component(props) {
    console.log("B",styles);
    return (

    // <div className="title">B Component</div> demek yerine
        <div className={styles.title}><h1>B Component</h1></div>
    );
}

export default B_Component;