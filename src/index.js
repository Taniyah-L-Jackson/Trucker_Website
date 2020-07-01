import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';

// var express = require('express');
// var router = express.Router();
// var nodemailer = require('nodemailer');
// var cors = require('cors');
// const creds = require('./config');

//For Form Submit

// var transport = {
//   host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
//   port: 3080,
//   auth: {
//     user: creds.USER,
//     pass: creds.PASS
//   }
// }

// For React Page

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

