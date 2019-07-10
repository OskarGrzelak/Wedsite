import React, { Component } from 'react';
import Layout from './Layout/Layout';
import Hamburger from './Components/Hamburger/Hamburger';
import Menu from './Components/Menu/Menu';
import UpArrow from './Components/UpArrow/UpArrow';
import Header from './Components/Header/Header';
import FixedImage from './Components/FixedImage/FixedImage';
import Frame from './Components/Frame/Frame';
import Info from './Components/Info/Info';
import ClickToAction from './Components/ClickToAction/ClickToAction';
import Schedule from './Components/Schedule/Schedule';
import Features from './Components/Features/Features';
import Form from './Components/Form/Form';
import FAQ from './Components/FAQ/FAQ';

class App extends Component {
    state = { menu: false, faq: false, arrow: true };
    scheduleRef = React.createRef();
    menuToggler = () => this.setState({menu: !this.state.menu});
    openFAQ = () => this.setState({faq: true});
    closeFAQ = () => this.setState({faq: false});
    scrollTo = (id, delay) => {
        const position = document.getElementById(id).offsetTop;
        this.setState({menu: false});
        setTimeout(() => this.scroll(position), delay);
    }
    scroll = (position) => window.scrollTo({top: position, behavior: 'smooth'})
    render() {
        return (
            <Layout>
                <Hamburger clicked={this.menuToggler} menu={this.state.menu} />
                <Menu menu={this.state.menu} openFAQ={this.openFAQ} scrollTo={this.scrollTo} />
                <UpArrow arrow={this.state.arrow} scrollTo={this.scrollTo} />
                <FixedImage />
                <Header />
                <Frame />
                <Info />
                <ClickToAction scrollTo={this.scrollTo} />
                <Schedule />
                <Features />
                <Form />
                <FAQ faq={this.state.faq} closeFAQ={this.closeFAQ} />
            </Layout>
        );
    }
}

export default App;
