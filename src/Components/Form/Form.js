import React from 'react';
import styles from './Form.module.css';

const form = () => (
    <div className={styles.Form}>
        <h3>Baw się razem z nami!</h3>
        <p>W celu potwierdzenia obecności skontaktuj się z nami telefonicznie (Asia: +48694221422, Oskar: +48666233973) lub skorzystaj z poniższego formularza</p>
        <input type="text" placeholder="Imię i nazwisko" />
        <input type="email" placeholder="Adres e-mail" />
        <button>Potwierdzam!</button>
    </div>
);

export default form;