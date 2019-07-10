import React from 'react';
import Item from './Item/Item';
import styles from './Schedule.module.css';

const schedule = () => (
    <div className={styles.Schedule} id="schedule">
        <h3>Plan działania</h3>
        <Item orientation="left" />
        <Item orientation="right" />
        <Item orientation="left" />
        <Item orientation="right" />
        <Item orientation="left" />
    </div>
);

export default schedule;