import INITIAL_STATE from '../../initialState';
import {CharacterId} from '../../types';
import {SET_CHARACTER_IDS, CharactersActionTypes} from './actions';

function characterIdsReducer (
  prevCharacters: CharacterId[] = INITIAL_STATE.characterIds,
  {
    type,
    payload,
  }: CharactersActionTypes
): CharacterId[] {
  switch(type) {
  case (SET_CHARACTER_IDS):
    return payload.newCharacterIds;

  default:
    return prevCharacters;
  }
}

export default characterIdsReducer;
export {setCharacterIds} from './actions';
