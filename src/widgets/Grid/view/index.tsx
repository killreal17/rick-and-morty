import React from 'react';

import {GridProps} from './types';

import {
  Header,
  Grid, 
  Text,
} from './styles';

import CharacterCard from '../../../components/CharacterCard';

const GridView: React.FC<GridProps> = ({
  characterIds,
}: GridProps) => (
  <>
    <Header>
      {characterIds.length !== 0
        ? (
          <Text
            size="l"
          >
            В базе найдены следующие лица
          </Text>
        )
        : (
          <>
            <Text
              size="l"
            >
              Ничего не найденно
            </Text>
            <Text
              color="rgb(120, 120, 120)"
            >
              Возможно, Вы найдете ответ в далекой части Вселенной, но, увы, не здесь
            </Text>
          </>
        )
      }
    </Header>
    <Grid>
      {characterIds.map(id => (
        <CharacterCard
          characterId={id}
          key={id}
        />
      ))}
    </Grid>
  </>
);

export default GridView;
