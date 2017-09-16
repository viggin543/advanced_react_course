// @ts-check
import express from 'express';
import config from './config';
import serverRender from './serverRender';


const app = express();
const initialContent = serverRender();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {initialContent});
});

app.listen(config.port, () => {
  console.info(`Running on ${config.port}...`);
}); 

