import React from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/index.scss'
import App from './App';
import axios from 'axios';
import { Provider } from 'react-redux'
import store from './store'
import * as serviceWorker from './serviceWorker';

React.Component.prototype.$ajax = axios;
axios.interceptors.request.use(config=>{
    config.url='http://10.60.15.196:8888'+config.url;
    return config;
});
axios.interceptors.response.use(({data})=>{
    return data;
});
ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
