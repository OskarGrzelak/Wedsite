import React from 'react';
import Animate from '../../../Conteners/Animate/Animate';
import styles from './Item.module.css';

const item = (props) => {
    let style = [styles.Item];
    style.push(styles[`Item--${props.orientation}`]);
    
    return (
        <Animate animationTrigger="600">
            <div className={style.join(' ')}>        
                <h4>17:00</h4>
                <p>Ceremonia zaślubin</p>
                <p>Hotel Junior</p>
                <p>ul. Skotnicka 272, Kraków</p>
            </div>
        </Animate>
    );
}

export default item;