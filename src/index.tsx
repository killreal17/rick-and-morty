import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import {Provider} from 'react-redux';

import store from './store';
import INITIAL_STATE from './store/initialState';
import {setCharacterIds} from './store/reducers/characters';
import CHARACTERS from './resourse/characters';
import {buildFilterCharactersByEpisode} from './helpers/filterChracters';

import AppView from './mainView';

const filterCharacters = buildFilterCharactersByEpisode(CHARACTERS);

store.subscribe(() => {
  const {filter, characterIds} = store.getState();

  const newCharactersIds = filter
    ? filterCharacters(filter)
    : INITIAL_STATE.characterIds;

  if (characterIds.toString() !== newCharactersIds.toString()) {
    store.dispatch(setCharacterIds(newCharactersIds));
  }
});

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <AppView/>
  </Provider>, 
  root
);
