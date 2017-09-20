//@ts-check


import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from 'components/App';

// @ts-ignore
import Api from 'state-api';
import config from '../config'
const { host, port } = config;

const getInitialState = async () => {
    const res = await fetch(`http://${host}:${port}/data`);
    const json = await res.json();

    const api = new Api(json);
    return {
        articles: api.getArticles(),
        authors: api.getAuthors()
    }
}

const serverRender = async () => {
    const initialData = await getInitialState();
    return {
        initialMarkup: ReactDOMServer.renderToString(
            // @ts-ignore
            <App initialData={await getInitialState()} />),
        initialData
    }
};

export default serverRender;