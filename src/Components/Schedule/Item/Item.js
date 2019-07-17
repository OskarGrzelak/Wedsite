import React from 'react';
import Animate from '../../../Conteners/Animate/Animate';
import styles from './Item.module.css';

const item = (props) => {
    let style = [styles.Item];
    style.push(styles[`Item--${props.orientation}`]);
    
    return (
        <Animate animationTrigger="600">
            <div className={style.join(' ')}>        
                <h4>{props.data.time}</h4>
                {props.data.paragraphs.map((el, i) => <p key={i}>{el}</p>)}
            </div>
        </Animate>
    );
}

export default item;