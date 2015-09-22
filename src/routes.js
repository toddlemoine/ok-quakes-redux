// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
import React from 'react'; /* eslint no-unused-vars:0 */

import { Route, DefaultRoute } from 'react-router';
import App from './components/App';

import Map from './components/Map';

let routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Map} name="home"/>
     // put other routes here
  </Route>
);

export default routes;
