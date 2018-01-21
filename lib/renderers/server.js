//@ts-check
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from 'components/App';
// @ts-ignore
import Api from 'state-api';
import {fetchArticles} from './api';



const serverRender = async () => {
    const initialData = await fetchArticles();
    const store = new Api(initialData.data);

    return {
        //its got to be string for the ejs..
        initialMarkup: ReactDOMServer.renderToString(
            // @ts-ignore
            <App store={store}/>),
        initialData
    };
};

export default serverRender;