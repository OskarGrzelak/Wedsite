import React from 'react';
import image from '../../Assets/Images/green-watercolor-splatter.jpeg';
import styles from './ClickToAction.module.css';

const clickToAction = (props) => (
    <figure className={styles.CTA}>
        <img src={image} alt="green splash" />
        <figcaption>
            <h3>{props.data.header.split('\n').map((el, index) => <span key={index}>{el}</span>)}</h3>
            <p>{props.data.paragraph}</p>
            <button onClick={() => props.scrollTo('form', 0)}>{props.data.button}</button>
        </figcaption>
    </figure>
);

export default clickToAction;