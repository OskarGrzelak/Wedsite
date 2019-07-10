import React from 'react';
import styles from './UpArrow.module.css';

const upArrow = (props) => {
    return <div className={props.arrow ? [styles.Arrow, styles['Arrow--active']].join(' ') : styles.Arrow} onClick={() => props.scrollTo('header', 0)} />
};

export default upArrow;
