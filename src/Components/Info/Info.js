import React from 'react';
import InfoElement from './InfoElement/InfoElement';
import styles from './Info.module.css';

const info = (props) => {

    let list = null;
    if (props.data) list = props.data.map((el, index) => <InfoElement data={el} key={index} />);
    return (
        <div className={styles.Info} id="info">
            {list}
        </div>
    );
}

export default info;