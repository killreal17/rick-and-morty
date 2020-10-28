import {connect} from 'react-redux';

import INITIAL_STATE from '../../store/initialState';
import CustomInput from './view';
import {CustomInputProps} from './view/types';

import {setFilter} from '../../store/reducers/filter';

const mapStateToProps = (
  state = INITIAL_STATE
): Omit<CustomInputProps, 'onInput'> => {
  const {filter} = state;
  const value = filter ? String(filter) : '';

  return ({
    value: value,
    placeholder: 'Введите номер эпизода',
  });
};

const mapDispatchToProps = dispatch => ({
  onInput: (value: number) => {dispatch(setFilter(value));},
});

const Filter = connect(mapStateToProps, mapDispatchToProps)(CustomInput);

export default Filter;
