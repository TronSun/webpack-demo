require('./common/css/style.css');
import './common/css/stylus.css';

import ReactDOM from 'react-dom'
import React from 'react'

import {foo} from './common/js/test.js'

import Box from './common/js/box.jsx'

foo();
ReactDOM.render(<Box />,document.getElementById('box'))