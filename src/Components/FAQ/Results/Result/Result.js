import React from 'react';
import styles from './Result.module.css';

const result = (props) => (
    <div className={styles.Result}>
        <h3>{props.title}</h3>
        <p>{props.answer}</p>
    </div>
);

export default result;