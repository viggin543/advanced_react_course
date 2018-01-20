// @ts-check
import express from 'express';
import config from './config';
import serverRender from '../renderers/server';
// @ts-ignore


const app = express();


app.use(express.static('public'))
  .set('view engine', 'ejs')
  .get('/', async (req, res) => {
    const content  = await serverRender();
    res.render('index', { ...content });
  })
  .listen(config.port, () => {
    console.info(`Running on ${config.port}...`);
  });

