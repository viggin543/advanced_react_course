import React from 'react';

import { storiesOf } from '@storybook/react';

import App from '../lib/components/App';
import Api from '../lib/state-api';
import {data} from '../lib/testData.json';


storiesOf('blog', module).add('article list',  () => {
  return (
    <App store={new Api(data)} />
  );
});


