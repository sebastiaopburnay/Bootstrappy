import React from "react";
import ReactDOM from "react-dom";
import env from '@env';

//import './style.sass';

const App = () => {
    console.log('delicia', env);
    return (
        <div>
            <h1>Hello, Zé dos bois!</h1>
            <img src={"http://www.iotnet.mx/wp-content/uploads/2017/02/LogoTcreator_final-300x129.png"} />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));
