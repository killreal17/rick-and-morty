import {CharacterId, Action} from '../../types';

export const SET_CHARACTER_IDS = '@characters/SET';

type SetCharacterAction = Action<{
  newCharacterIds: CharacterId[],
}>;

export type CharactersActionTypes = SetCharacterAction

export const setCharacterIds = (newCharacterIds: CharacterId[]): SetCharacterAction => ({
  type: SET_CHARACTER_IDS,
  payload: {
    newCharacterIds: newCharacterIds,
  },
});




