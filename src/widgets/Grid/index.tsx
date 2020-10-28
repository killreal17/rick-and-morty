import {connect} from 'react-redux';

import INITIAL_STATE from '../../store/initialState';
import GridView from './view';
import {GridProps} from './view/types';

const mapStateToProps = (
  state = INITIAL_STATE
): GridProps => ({
  characterIds: state.characterIds,
}); 

const Grid = connect(mapStateToProps)(GridView);

export default Grid;
