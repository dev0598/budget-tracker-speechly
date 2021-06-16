import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import './index.css'
import { Provider } from './context/context';
import App from './App';

ReactDOM.render(
    <SpeechProvider appId="cd662364-594a-4c42-9e46-7df0caebfe0c" language="en-US">
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);