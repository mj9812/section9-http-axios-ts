import axios from 'axios';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// const authkey = 'Authorization';
// axios.defaults.headers.common[authkey] = 'AUTH TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

// axios.interceptors.request.use((request: any) => {
//     return request; // intercept requests here...
// }, (error: any) => {
//     return Promise.reject(error); // handle request related errors here...
// });

// axios.interceptors.response.use((response: any) => {
//     return response; // intercept response here...
// }, (error: any) => {
//     return Promise.reject(error); // handle response related errors here...
// });

// const axiosInstnce = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com'
// });

ReactDOM.render( <App />, document.getElementById('root') as HTMLElement );
registerServiceWorker();

// export { axiosInstnce }; 