import React from 'react';
import Results from './Results/Results';
import styles from './FAQ.module.css';

const faq = () => {
    return (
        <div className={styles.FAQ}>
            <button></button>
            <input placeholder="Czego szukasz?" />
            <Results />
        </div>
    )
}

export default faq;