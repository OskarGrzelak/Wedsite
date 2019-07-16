import React from 'react';
import styles from './Header.module.css';

const header = (props) => {

    return (
        <div className={styles.Header} id="header">
            <div className={styles.Menu} />
            <div className={styles.Title}>
                <div>
                    <h1>{props.data.title}</h1>
                    <h2>{props.data.subtitle}</h2>
                </div>
            </div>
        </div>
    );
};

export default header;