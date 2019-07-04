import React, { Component } from 'react';
import Layout from './Layout/Layout';
import Hamburger from './Components/Hamburger/Hamburger';
import Header from './Components/Header/Header';
import FixedImage from './Components/FixedImage/FixedImage';
import Frame from './Components/Frame/Frame';
import Info from './Components/Info/Info';
import ClickToAction from './Components/ClickToAction/ClickToAction';
import Schedule from './Components/Schedule/Schedule';
import Features from './Components/Features/Features';
import Form from './Components/Form/Form';

class App extends Component {
    state = { menu: false };
    menuToggler = () => this.setState({menu: !this.state.menu});
    render() {
    return (
        <Layout>
            <Hamburger clicked={this.menuToggler} menu={this.state.menu} />
            <FixedImage />
            <Header />
            <Frame />
            <Info />
            <ClickToAction />
            <Schedule />
            <Features />
            <Form />
        </Layout>
    );
}
}

export default App;
