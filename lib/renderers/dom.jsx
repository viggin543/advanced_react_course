import React from 'react';
import ReactDom from 'react-dom';
import App from 'components/App'
import Api from 'state-api';

const store =  new Api(window.initialData);

ReactDom.render(
  <App store={store}/>,
  document.getElementById('root')
);