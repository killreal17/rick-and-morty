import {connect} from 'react-redux';

import INITIAL_STATE from '../../store/initialState';
import CustomInput from './view';

import {setFilter} from '../../store/reducers/filter';

const mapStateToProps = (
  filter = INITIAL_STATE.filter
) => {
  console.log(filter);
  const value = filter 
    ? filter.toString()
    : '';

  return {
    value: value,
    placeholder: 'Введите номер эпизода',
  };
};

const mapDispatchToProps = dispatch => ({
  onInput: (value: number) => {},
});

console.log(mapStateToProps(), mapDispatchToProps('a'));

export const Filter = connect(mapStateToProps)(CustomInput);

