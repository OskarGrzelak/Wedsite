import React, { Component, Fragment } from 'react';
import Animate from '../../Conteners/Animate/Animate';
import Hamburger from '../Hamburger/Hamburger';
import Menu from '../Menu/Menu';
import UpArrow from '../UpArrow/UpArrow';
import Header from '../Header/Header';
import FixedImage from '../FixedImage/FixedImage';
import Frame from '../Frame/Frame';
import Info from '../Info/Info';
import ClickToAction from '../ClickToAction/ClickToAction';
import Schedule from '../Schedule/Schedule';
import Features from '../Features/Features';
import Form from '../Form/Form';
import FAQ from '../FAQ/FAQ';

class MainPage extends Component {

    state = { menu: false, faq: false, arrow: false, pageOffset: 0 };

    scheduleRef = React.createRef();
    menuToggler = () => this.setState({menu: !this.state.menu});
    openFAQ = () => this.setState({faq: true});
    closeFAQ = () => this.setState({faq: false});
    scrollTo = (id, delay) => {
        const clientRect = document.getElementById(id).getBoundingClientRect();
        const position = clientRect.top + window.scrollY - 200;
        this.setState({menu: false});
        setTimeout(() => this.scroll(position), delay);
    }
    scroll = (position) => window.scrollTo({top: position, behavior: 'smooth'});
    arrowToggler = () => {
        if (window.pageYOffset >= window.innerHeight && !this.state.arrow) {
            this.setState({arrow: true})
        } else if (window.pageYOffset < window.innerHeight && this.state.arrow) {
            this.setState({arrow:false})
        }
    }
    scrollMeter = () => {
        if (this.state.pageOffset !== window.pageYOffset) this.setState({pageOffset: window.pageYOffset})
    }
    scrollEventsHandler = () => {
        window.addEventListener('scroll', () => {
            this.scrollMeter();
            this.arrowToggler();
        });
    }

    render() {
        this.scrollEventsHandler();
        return (
            <Fragment>
                <Hamburger clicked={this.menuToggler} menu={this.state.menu} />
                <Menu menu={this.state.menu} openFAQ={this.openFAQ} scrollTo={this.scrollTo} />
                <UpArrow arrow={this.state.arrow} scrollTo={this.scrollTo} />
                <FixedImage />
                <Header data={this.props.data.header} />
                <Frame />
                <Animate>
                    <Info />
                </Animate>
                <Animate>
                    <ClickToAction scrollTo={this.scrollTo} />
                </Animate>
                <Animate>
                    <Schedule />
                </Animate>
                <Animate>
                    <Features />
                </Animate>
                <Animate>
                    <Form />
                </Animate>
                <FAQ faq={this.state.faq} closeFAQ={this.closeFAQ} />
            </Fragment>
        )
    }
};

export default MainPage;