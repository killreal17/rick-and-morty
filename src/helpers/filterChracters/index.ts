import {Character} from '../../resourse/characters/types';

export const buildFilterCharactersByEpisode = (
  characters: Character[]
) => (
  episode: number
) => characters
  .filter(character => character.episode.has(episode))
  .map(character => character.id);
