import React from 'react';
import styles from './Feature.module.css';

const feature = (props) => (
    <div className={styles.Feature}>
        <div>
            <object type="image/svg+xml" data={props.data.svg} title={props.data.label} />
        </div>
        <p>{props.data.text}</p>
    </div>
)

export default feature;