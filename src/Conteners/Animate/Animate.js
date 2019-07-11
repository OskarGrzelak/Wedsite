import React, { Component } from 'react';
import styles from './Animate.module.css';

class Animate extends Component {
    
    animRef = React.createRef();

    animateElement = () => {
        if (this.animRef.current) {
            const animationTrigger = this.props.animationTrigger ? this.props.animationTrigger : 200;
            const position = this.animRef.current.getBoundingClientRect().top;
            if (position <= animationTrigger) return {opacity: 1, transform: "translateY(0)"};
        }
        return null;
    }

    render() {
        return (
            <div ref={this.animRef} className={styles.Background}>
                <div className={styles.Container} style={this.animateElement()}>
                    {this.props.children}
                </div>
            </div>
        );
    };
}

export default Animate;