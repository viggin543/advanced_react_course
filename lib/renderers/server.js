//@ts-check


import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from 'components/App';

// @ts-ignore
import Api from 'state-api';
import config from '../config'
const { host, port } = config;

const serverRender = async () => {
    const res = await fetch(`http://${host}:${port}/data`);
    const initialData = await res.json();
    const store =  new Api(initialData);
    
    return {
        initialMarkup: ReactDOMServer.renderToString(
            // @ts-ignore
            <App store={store} />),
        initialData
    }
};

export default serverRender;