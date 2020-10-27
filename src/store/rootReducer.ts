import {combineReducers} from 'redux';

import filterReducer from './reducers/filter';
import characterIdsReducer from './reducers/characters';

const rootReducer = combineReducers({
  filter: filterReducer,
  characterIds: characterIdsReducer,
});

export default rootReducer;
