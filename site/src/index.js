import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

import * as serviceWorker from './serviceWorker';

React.Component.prototype.$ajax = axios;
axios.interceptors.request.use(config=>{
    config.url='http://10.60.15.196:8888/cloud'+config.url;
    return config;
});
axios.interceptors.response.use(({data})=>{
    return data;
})
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
