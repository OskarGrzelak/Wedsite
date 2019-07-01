import React from 'react';
import styles from './Header.module.css';

const header = () => {

    return (
        <div className={styles.Header}>
            <div className={styles.Menu}>MENU</div>
            <div className={styles.Title}>
                <div>
                    <h1>Asia & Oskar</h1>
                    <h2>12 wrzesnia 2020</h2>
                </div>
            </div>
        </div>
    );
};

export default header;