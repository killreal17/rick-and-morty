import {Filter, Action} from '../../types';

export const SET_FILTER = '@filter/SET';

type SetFilterAction = Action<{
  newFilter: Filter, 
}>

export type FilterActionTypes = SetFilterAction;

export const setFilter = (newFilter: Filter): SetFilterAction => ({
  type: SET_FILTER,
  payload: {
    newFilter: newFilter,
  },
});
