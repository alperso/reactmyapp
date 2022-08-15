import React from 'react';
import styles from "./style.module.css";

function A_Component(props) {
    console.log("A",styles);
    // A {title: 'style_title__7R41l'} title: "style_title__7R41l"[[Prototype]]: Object
    // B {title: 'style_title__20uaB'}title: "style_title__20uaB"[[Prototype]]:
    // //hepsi için farklı id style tanımladı
    return (
        // <div className="title">A Component</div> demek yerine
        <div className={styles.title}> <h1 className={styles.header}>A Component</h1></div>
    );
}

export default A_Component;