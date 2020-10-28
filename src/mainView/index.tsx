import React from 'react';

import {AppProps} from './types';

import {
  Background,
  Header,
  Grid,
} from './styles';

import Filter from '../widgets/Filter';

import CharacterCard from '../components/CharacterCard';

const AppView: React.FC<AppProps> = () => (
  <Background>
    <Header>
      <Filter/>
    </Header>
    <Grid>  
      <CharacterCard
        characterId={1}
      />
      <CharacterCard
        characterId={2}
      />
      <CharacterCard
        characterId={3}
      />
      <CharacterCard
        characterId={4}
      />
    </Grid>
  </Background>
);

export default AppView;
