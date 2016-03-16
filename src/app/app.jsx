import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  useRouterHistory,
} from 'react-router';
import AppRoutes from './AppRoutes.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {createHashHistory} from 'history';


//Helpers for debugging
// window.React = React;
// window.Perf = require('react-addons-perf');

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(
  <Router
    history={useRouterHistory(createHashHistory)({queryKey: false})}
    onUpdate={() => window.scrollTo(0, 0)}
  >
    {AppRoutes}
  </Router>
, document.getElementById('app'));
