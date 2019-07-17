import React from 'react';
import NavElement from './NavElement/NavElement';
import styles from './Menu.module.css';

const menu = (props) => {
    let list = null;
    if (props.data) list = props.data.map((el, index) => <NavElement data={el} openFAQ={props.openFAQ} scrollTo={props.scrollTo} key={index} />);
    return (
        <div>
            <div className={props.menu ? [styles['Menu__background'], styles['Menu__background--opened']].join(' ') : styles['Menu__background']} />
            <nav className={props.menu ? [styles['Menu__nav'], styles['Menu__nav--opened']].join(' ') : styles['Menu__nav']}>
                <ul>
                    {list}
                </ul>
            </nav>
        </div>
    )
};

export default menu;