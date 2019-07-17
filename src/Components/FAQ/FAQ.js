import React, { Component } from 'react';
import Results from './Results/Results';
import styles from './FAQ.module.css';

class Faq extends Component {

    state = {keyword: ''}

    keywordHandler = (event) => {this.setState({keyword: event.target.value})}
    dataHandler = () => {
        const keyword = this.state.keyword;
        return this.props.data.items.filter(result => (result.title.indexOf(keyword) > -1 || result.answer.indexOf(keyword) > -1));
    }

    render() {
        return (
            <div className={this.props.faq ? [styles.FAQ, styles['FAQ--opened']].join(' ') : styles.FAQ}>
                <button onClick={this.props.closeFAQ} />
                <input placeholder={this.props.data.searchPlaceholder} onChange={e => this.keywordHandler(e)} value={this.state.keyword} />
                {this.props.faq ? <Results data={this.dataHandler()} /> : null}
            </div>
        )
    }
}

export default Faq;