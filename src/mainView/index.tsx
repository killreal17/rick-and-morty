import React from 'react';

import {AppProps} from './types';

import {
  Background,
  Header,
  Grid,
} from './styles';

const AppView: React.FC<AppProps> = () => (
  <Background>
    <Header>
    </Header>
    <Grid>  
    </Grid>
  </Background>
);

export default AppView;
