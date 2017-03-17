import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

//import components
import App from './components/App';
import Single from './components/single';
import photoGrid from './components/photogrid';

//import react router dependicies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={photoGrid}></IndexRoute>
          <Route path='/view/:postId' component={Single}></Route>
          </Route>
      </Router>
    </Provider>
)

render(router, document.getElementById('root'));
