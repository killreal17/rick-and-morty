import INITIAL_STATE from '../../initialState';
import {Filter} from '../../types';
import {SET_FILTER, FilterActionTypes} from './actions';

function filterReducer (
  prevFilter: Filter = INITIAL_STATE.filter,
  {
    type,
    payload,
  }: FilterActionTypes
): Filter {
  switch (type) {
  case SET_FILTER: 
    return payload.newFilter;

  default:
    return prevFilter;
  }
}

export default filterReducer;
export {setFilter} from './actions';
