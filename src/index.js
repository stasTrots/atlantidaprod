import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { rootReducer } from './redux/rootReducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import App from './App/App';
import ScrollRoute from './Components/ScrollToTop/ScrollRoute'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollRoute />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


