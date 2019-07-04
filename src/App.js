import React from 'react';
import Layout from './Layout/Layout';
import Header from './Components/Header/Header';
import FixedImage from './Components/FixedImage/FixedImage';
import Frame from './Components/Frame/Frame';
import Info from './Components/Info/Info';
import ClickToAction from './Components/ClickToAction/ClickToAction';
import Schedule from './Components/Schedule/Schedule';
import Features from './Components/Features/Features';
import Form from './Components/Form/Form';

function App() {
    return (
        <Layout>
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

export default App;
