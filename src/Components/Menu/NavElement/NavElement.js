import React from 'react';

const navElement = (props) => {
    let element = <li onClick={props.openFAQ}>FAQ</li>;
    if (props.data.target) element = <li onClick={() => props.scrollTo(props.data.target, 800)}>{props.data.label}</li>;

    return element;
}

export default navElement;