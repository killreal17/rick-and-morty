import React from 'react';

import {AppProps} from './types';

import {
  Background,
  Header,
} from './styles';

import Filter from '../widgets/Filter';
import Grid from '../widgets/Grid';

const AppView: React.FC<AppProps> = () => (
  <Background>
    <Header>
      <Filter/>
    </Header>
    <Grid/>
  </Background>
);

export default AppView;
