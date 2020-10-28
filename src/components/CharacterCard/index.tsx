import React from 'react';

import {getCharacterDataById} from '../../resourse/characters';

import {CardProps} from './types';

import {
  Wrapper, 
  Image, 
  Information,
  Cell, 
  Text,
} from './styles';

const concatId = (
  name: string, 
  id: number
) => name.toLowerCase().replace(' ', '') + 'ID' + id;

const getColorForStatus = (status: string) => {
  switch(status) {
  case 'Alive':
    return 'rgb(3, 158, 19)';
    
  case 'Dead': 
    return 'rgb(217, 13, 40)';

  default:
    return null;
  }
};

const CharacterCard: React.FC<CardProps> = ({
  characterId,
}: CardProps) => {

  const character = getCharacterDataById(characterId);

  return (
    <Wrapper>
      <Image
        src={character.image}
      />
      <Information>
        <Cell>
          <Text
            color="rgb(209, 209, 209)"
          >
            {concatId(character.name, character.id)}
          </Text>
        </Cell>
        <Cell>
          <Text 
            size="l"
            color="rgb(209, 209, 209)"
          >
            {character.name}
          </Text>
          <Text
            size="s"
            color={getColorForStatus(character.status)}
          >
            {character.status}
          </Text>
        </Cell>
        <Cell>
          <Text
            size="s"
          >
            Категория: {character.species}
          </Text>
        </Cell>
        <Cell>
          <Text
            size="s"
          >
            Пол: {character.gender}
          </Text>
        </Cell>
        <Cell>
          <Text
            size="s"
          >
            Происхождение: {character.origin}
          </Text>
        </Cell>
        <Cell>
          <Text
            size="s"
          >
            Месторасположение: {character.location}
          </Text>
        </Cell>
      </Information>
    </Wrapper>
  );
};

export default CharacterCard;
