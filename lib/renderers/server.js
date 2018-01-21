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
    let route = `http://${host}:${port}/latest/data`;
    console.log(route);
    const res = await fetch(route);
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