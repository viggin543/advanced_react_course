// @ts-check
import express from 'express';
import config from './config';
import serverRender from '../renderers/server';
// @ts-ignore
import { data } from '../testData';
import {IncomingForm} from 'formidable';
import {v1} from 'uuid';
import {getConnection} from './mongoConHandler';

const app = express();


app.use(express.static('public'))
  .set('view engine', 'ejs')
  .get('/', async (req, res) => {
    const content  = await serverRender();
    res.render('index', { ...content });
  })
  .get('/data', (req, res) => {
    res.send(data);
  })
  .post('/article', (req, res) => {
    var form = new IncomingForm();
    form.parse(req, async (err, fields, files) => {
      res.writeHead(200, {'content-type': 'application/json'});
      const db = await getConnection();    
      db.collection('articales').insert({
        ...fields,
        id:v1(),
        authorId:v1(),
        date:new Date()
      });
  
      res.end();
    });
  })
  .listen(config.port, () => {
    console.info(`Running on ${config.port}...`);
  });

