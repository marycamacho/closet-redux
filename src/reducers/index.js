import { combineReducers } from 'redux';
import ItemsReducers from './reducer_items';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  myItems: ItemsReducers,
  form: formReducer
});

export default rootReducer;