import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import store from './store';
import {setCharacterIds} from './store/reducers/characters';
import CHARACTERS from './resourse/characters';
import {buildFilterCharactersByEpisode} from './helpers/filterChracters';

import AppView from './mainView';

const filterCharacters = buildFilterCharactersByEpisode(CHARACTERS);

store.subscribe(() => {
  const {filter, characterIds} = store.getState();

  const newCharactersIds = filterCharacters(filter);

  if (characterIds.toString() !== newCharactersIds.toString()) {
    store.dispatch(setCharacterIds(filterCharacters(filter)));
  }
});

const root = document.getElementById('root');
ReactDOM.render(<AppView/>, root);
