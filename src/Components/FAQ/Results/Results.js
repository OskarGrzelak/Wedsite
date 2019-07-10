import React from 'react';
import Result from './Result/Result';
import styles from './Results.module.css';

const results = (props) => {
    let list = null;
    if (props.data) list = props.data.map((result, index) => <Result title={result.title} answer={result.answer} key={index} />)
    return (
        <div className={styles.Results}>
            {list}
        </div>
    )
}

export default results;