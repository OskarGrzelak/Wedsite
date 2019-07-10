import React from 'react';
import styles from './Info.module.css';

const info = () => (
    <div className={styles.Info} id="info">
        <div>
            <p>Co się dzieje?</p>
            <p>Asia i Oskar pobierają się</p>
        </div>
        <div>
            <p>Kiedy?</p>
            <p>12 września 2020</p>
        </div>
        <div>
            <p>Gdzie?</p>
            <p><span>Hotel Junior,</span><span>ul. Skotnicka 272, Kraków</span></p>
        </div>
    </div>
);

export default info;