import 'babel/polyfill';
import 'basscss/css/basscss.css';
import React from 'react';
import Router from 'react-router';
import routes from './routes';
import attachFastClick from 'fastclick';
// import 'babel-core/polyfill';

// // Redux DevTools store enhancers
// import { devTools, persistState } from 'redux-devtools';
// // React components for Redux DevTools
// import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';


// Remove 300ms tap delay on mobile devices
attachFastClick.attach(document.body);

// Expose globally
window.React = React;

const router = Router.create({
  routes: routes,
  location: Router.HashLocation // Router.HistoryLocation
});

router.run((Handler, state) => {
    React.render(
      <Provider store={configureStore()}>
        {() => <Handler {...state} />}
      </Provider>,
      document.getElementById('root')
    );
});
