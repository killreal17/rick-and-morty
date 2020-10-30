import React, {useState, useEffect} from 'react';

import {CardProps} from './types';
import {getCharacterData} from './helpers';

import {
  Wrapper, 
  Image, 
  Information,
  Cell, 
  Text,
  LoadingPlace,
} from './styles';

const deleteSpaces = (str: string) => {
  const result = str.replace(' ', '');
  
  return result.length === str.length
    ? result
    : deleteSpaces(result);
};

const concatId = (
  name: string, 
  id: number
) => '#' + deleteSpaces(name.toLowerCase()) + 'ID' + id;

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

  const [character, setCharacter] = useState({
    image: null,
    id: null,
    name: null,
    status: null,
    species: null,
    gender: null,
    origin: null,
    location: null,
  });

  useEffect(() => {
    getCharacterData(characterId).then(setCharacter);
  }, 
  [character]
  );

  return (
    <Wrapper>
      <Image
        src={character.image}
        isAnimated={!character.image}
      />
      <Information>
        <Cell>
          {
            character.name
              ? (
                <Text
                  color="rgb(209, 209, 209)"
                >
                  {concatId(character.name, character.id)}
                </Text>
              )
              : <LoadingPlace/>
          }
          
        </Cell>
        <Cell>
          {
            character.name
              ? (
                <Text 
                  size="l"
                  color="rgb(209, 209, 209)"
                >
                  {character.name}
                </Text>
              )
              : <LoadingPlace size="l"/>
          }
          {
            character.status
              ? (
                <Text
                  size="s"
                  color={getColorForStatus(character.status)}
                >
                  {character.status}
                </Text>
              )
              : <LoadingPlace size="s"/>
          }
          
        </Cell>
        <Cell>
          {
            character.species
              ? (
                <Text
                  size="s"
                >
                  Категория: {character.species}
                </Text>
              )
              : <LoadingPlace size="s"/>
          }
        </Cell>
        <Cell>
          {
            character.gender
              ? (
                <Text
                  size="s"
                >
                  Пол: {character.gender}
                </Text>
              )
              : <LoadingPlace size="s"/>
          }
        </Cell>
        <Cell>
          {
            character.origin
              ? (
                <Text
                  size="s"
                >
                  Происхождение: {character.origin}
                </Text>
              )
              : <LoadingPlace size="s"/>
          }
        </Cell>
        <Cell>
          {
            character.location
              ? (
                <Text
                  size="s"
                >
                  Месторасположение: {character.location}
                </Text>
              )
              : <LoadingPlace size="s"/>
          }
        </Cell>
      </Information>
    </Wrapper>
  );
};

export default CharacterCard;
