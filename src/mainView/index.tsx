import React from 'react';

import {AppProps} from './types';

import {
  Background,
  Header,
  Grid,
} from './styles';

import Filter from '../widgets/Filter';

const AppView: React.FC<AppProps> = () => (
  <Background>
    <Header>
      <Filter/>
    </Header>
    <Grid>  
    </Grid>
  </Background>
);

export default AppView;
