import React from 'react';

import {GridProps} from './types';

import {Grid} from './styles';

import CharacterCard from '../../../components/CharacterCard';

const GridView: React.FC<GridProps> = ({
  characterIds,
}: GridProps) => (
  <Grid>
    {characterIds.map(id => (
      <CharacterCard
        characterId={id}
        key={id}
      />
    ))}
  </Grid>
);

export default GridView;
