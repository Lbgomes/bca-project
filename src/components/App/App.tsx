import Header from 'components/Header';
import Routes from 'components/Routes';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes aria-label="Routes" />
        </BrowserRouter>
    );
}

export default App;