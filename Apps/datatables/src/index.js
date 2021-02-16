import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './datatables';
import reportWebVitals from './reportWebVitals';

const defaultProps = {
  datatable: [{first: 'forst', last: 'lastt', email: 'emailllll'}]
}

ReactDOM.render(
  <React.StrictMode>
    <App {...defaultProps}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
