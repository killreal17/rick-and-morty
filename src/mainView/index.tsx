import React from 'react';

import {AppProps} from './types';

import {
  Background,
  Header,
} from './styles';

import Filter from '../widgets/Filter';

const AppView: React.FC<AppProps> = () => (
  <Background>
    <Header>
      <Filter/>
    </Header>
  </Background>
);

export default AppView;
