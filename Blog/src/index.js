import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Axios from 'axios';

Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
Axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'
Axios.defaults.headers.post['Conten'] = 'application/json'

Axios.interceptors.request.use(request=>{
    console.log(request)
    //Edit before send something
    return request
}, error => {
    console.log(error)
    return Promise.reject(error)
});

Axios.interceptors.response.use(response=>{
    console.log(response)
    //Edit before send something
    return response
}, error => {
    console.log(error)
    return Promise.reject(error)
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
