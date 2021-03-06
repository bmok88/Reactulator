import React from 'react';
import { render } from 'react-dom';
import css from '../public/styles.sass';

import Calculator from './containers/Calculator';

const renderApp = () => {
  render(<Calculator />, document.getElementById('app'));
};

renderApp();

if (module.hot) {
  module.hot.accept('./containers/Calculator', () => {
    renderApp();
  });
}
