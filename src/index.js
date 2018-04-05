import React from "react";
import ReactDOM from "react-dom";

import env from '@env';
import './style.scss';

import App from './app';
/*
This is now in /src/app/index.js
    const App = () => {
        console.log('delicia', env);
        return (
            <div>
                <h1>Hello, Zé dos bois!</h1>
                <img src={"http://www.iotnet.mx/wp-content/uploads/2017/02/LogoTcreator_final-300x129.png"} />
            </div>
        )
    };
*/
ReactDOM.render(<App />, document.getElementById("root"));
