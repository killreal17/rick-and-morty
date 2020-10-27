import store from './store';
import {setCharacterIds} from './store/reducers/characters';
import CHARACTERS from './resourse/characters';
import {buildFilterCharactersByEpisode} from './helpers/filterChracters';

const filterCharacters = buildFilterCharactersByEpisode(CHARACTERS);

store.subscribe(() => {
  const {filter, characterIds} = store.getState()

  const newCharactersIds = filterCharacters(filter)

  if (characterIds.toString() !== newCharactersIds.toString()) {
    store.dispatch(setCharacterIds(filterCharacters(filter)))
  }
})
