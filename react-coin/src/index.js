import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header'
import './index.css'


const App = () => {
    const title = 'React Coin';

    return (
        <div>
            <Header/>
            <h1 className="title">{title}</h1>
            <p>Up-To-Date Cryptocurrencies Financial Data</p>
        </div>
    );
};


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
