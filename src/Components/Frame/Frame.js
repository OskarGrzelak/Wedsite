import React from 'react';
import image from '../../Assets/Images/splash_reverse.png';
import styles from './Frame.module.css';

const frame = () => (
    <img src={image} className={styles.Frame} />
);

export default frame;