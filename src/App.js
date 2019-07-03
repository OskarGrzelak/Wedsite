import React from 'react';
import Layout from './Layout/Layout';
import Header from './Components/Header/Header';
import FixedImage from './Components/FixedImage/FixedImage';
import Frame from './Components/Frame/Frame';
import Info from './Components/Info/Info';
import ClickToAction from './Components/ClickToAction/ClickToAction';

function App() {
    return (
        <Layout>
            <FixedImage />
            <Header />
            <Frame />
            <Info />
            <ClickToAction />
        </Layout>
    );
}

export default App;
