import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import { create_store } from './redux/store';
import { routes } from './pages/router';
import { setHtmlFont } from './utils';
import './commons/css/style.scss';

const store = create_store();
const root_element = document.getElementById('root');
setHtmlFont();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Switch>
        {
          routes.map((val, key) => <Route {...val} key={`route_${key}`}/>)
        }
      </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  root_element,
);