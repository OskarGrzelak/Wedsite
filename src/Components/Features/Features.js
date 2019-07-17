import React from 'react';
import Feature from './Feature/Feature';
import styles from './Features.module.css';

const features = (props) => {
    let list = null;
    if (props.data) list = props.data.map((el, i) => <Feature key={i} data={el} />);
    return (
        <div className={styles.Features} id="features">
            {list};
        </div>
    );
}

export default features;