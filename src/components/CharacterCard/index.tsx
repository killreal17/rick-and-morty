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
          <Text >
            {concatId(character.name, character.id)}
          </Text>
        </Cell>
        <Cell>
          <Text 
            size="l"
          >
            {character.name}
          </Text>
          <Text
            size="s"
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
