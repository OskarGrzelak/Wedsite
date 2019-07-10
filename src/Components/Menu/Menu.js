import React from 'react';
import styles from './Menu.module.css';

const menu = (props) => {

    return (
        <div>
            <div className={props.menu ? [styles['Menu__background'], styles['Menu__background--opened']].join(' ') : styles['Menu__background']} />
            <nav className={props.menu ? [styles['Menu__nav'], styles['Menu__nav--opened']].join(' ') : styles['Menu__nav']}>
                <ul>
                    <li>Kiedy i gdzie?</li>
                    <li>Plan działania</li>
                    <li>Prezenty i dress code</li>
                    <li>Potwierdź udział</li>
                    <li onClick={props.openFAQ}>FAQ</li>
                </ul>
            </nav>
        </div>
    )
};

export default menu;