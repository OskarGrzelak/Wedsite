import React, { Component } from 'react';
import Layout from './Conteners/Layout/Layout';
import WelcomeScreen from './Components/WelcomeScreen/WelcomeScreen';
import MainPage from './Components/MainPage/MainPage';
import data from './data';

class App extends Component {
    state = { language: '' };

    languageHandler = (language) => this.setState({ language: language });

    render() {
        let displayedPage = <WelcomeScreen languageHandler={this.languageHandler} />;
        if (this.state.language === 'pl') {
            displayedPage = <MainPage data={data.pl} />
        } else if (this.state.language === 'en') {
            displayedPage = <MainPage data={data.en} />
        }
        return ( 
            <Layout>
                {displayedPage}
            </Layout>
        );
    }
}

export default App;
