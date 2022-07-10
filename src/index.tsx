import 'bootstrap/dist/css/bootstrap.min.css';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import Main from './features/Main/Main';
import store from './store';

createRoot(document.querySelector('#root')!).render(
  <Provider store={store}>
    <Main />
  </Provider>,
);
