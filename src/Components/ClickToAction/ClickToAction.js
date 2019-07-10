import React from 'react';
import image from '../../Assets/Images/green-watercolor-splatter.jpeg';
import styles from './ClickToAction.module.css';

const clickToAction = () => (
    <figure className={styles.CTA}>
        <img src={image} alt="green splash" />
        <figcaption>
            <h3><span>Prosimy o potwierdzenie obecności</span><span>do 1 lipca 2020</span></h3>
            <p>Bardzo liczymy, że będziecie się bawić razem z nami aż do białego rana</p>
            <button>Potwierdzam!</button>
        </figcaption>
    </figure>
);

export default clickToAction;