//@ts-check
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from 'components/App';
import fetch from 'isomorphic-fetch';
// @ts-ignore
import Api from 'state-api';
import config from '../backend/config';
const { host, port } = config;

const serverRender = async () => {
  const res = await fetch(`http://${host}:${port}/data`);
  const initialData = await res.json();
  const store =  new Api(initialData);
    
  return {
    //its got to be string for the ejs..
    initialMarkup: ReactDOMServer.renderToString(
      // @ts-ignore
      <App store={store} />),
    initialData
  };
};

export default serverRender;