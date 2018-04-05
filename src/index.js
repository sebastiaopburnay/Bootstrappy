import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import env from '@env';
import './style.scss';
import store from '@state';

import App from './app';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
