import React from 'react';
import Item from './Item/Item';
import styles from './Schedule.module.css';

const schedule = (props) => {
    let list = null;
    if (props.data) list = props.data.items.map((el, i) => <Item key={i} orientation={i % 2 ? "right" : "left"} data={el} />);
    return (
        <div className={styles.Schedule} id="schedule">
            <h3>{props.data.title}</h3>
            {list}
        </div>
    );
}

export default schedule;