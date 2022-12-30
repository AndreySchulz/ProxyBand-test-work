import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import 'modern-normalize/modern-normalize.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/ProxyBand-test-work">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
