import React from 'react';
import styles from './Form.module.css';

const form = (props) => (
    <div className={styles.Form} id="form">
        <h3>{props.data.header}</h3>
        <p>{props.data.paragraph}</p>
        <input type="text" placeholder={props.data.namePlaceholder} />
        <input type="email" placeholder={props.data.emailPlaceholder} />
        <button>{props.data.button}</button>
    </div>
);

export default form;