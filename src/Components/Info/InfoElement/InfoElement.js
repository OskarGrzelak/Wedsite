import React from 'react';

const infoElement = (props) => (
    <div>
        <p>{props.data.question}</p>
        <p>{props.data.answer.split('\n').map((el, index) => <span key={index}>{el}</span>)}</p>
    </div>
)

export default infoElement;