import React from 'react';
import styles from './WelcomeScreen.module.css';

const welcomeScreen = (props) => (
    <div className={styles.Screen}>
        <button className={styles.BtnLeft} id="pl" onClick={e => props.languageHandler(e.target.id)} />
        <button className={styles.BtnRight} id="en" onClick={e => props.languageHandler(e.target.id)} />
        <div className={styles.Left}>
            <div>
                <h3>Bądź z nami</h3>
            </div>
        </div>
        <div className={styles.Center}>
            <h1>Asia & Oskar</h1>
            <h2>12.09.2020</h2>
        </div>
        <div className={styles.Right}>
            <div>
                <h3>Save the date</h3>
            </div>
        </div>
    </div>
);

export default welcomeScreen;