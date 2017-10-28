import React from 'react';
import ReactDOM from 'react-dom';
import theme from '@instructure/ui-themes/lib/canvas';
import './index.css';
import ComponentStuffer from './ComponentStuffer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ComponentStuffer />, document.getElementById('root'));
registerServiceWorker();
