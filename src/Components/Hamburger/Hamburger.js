import React from 'react';
import styles from './Hamburger.module.css';

const hamburger = (props) => {
    let style = [styles.Hamburger];
    if (props.menu) style.push(styles.Clicked)
    return (
        <div className={style.join(' ')} onClick={props.clicked}>
            <div>&nbsp;</div>
        </div>
    );
};

export default hamburger;