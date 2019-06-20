import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import './sticac/css/reset.css';
import 'antd-mobile/dist/antd-mobile.css';
import {Provider} from 'react-redux';
import store from '@/store/index.js';

import './mock.js';


ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>
		
	, document.getElementById('root'));

serviceWorker.unregister();
