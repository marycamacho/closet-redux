import { combineReducers } from 'redux';
import ItemsReducers from './reducer_items';
import CurrentUserReducer from './reducer_current_user';
import { reducer as formReducer } from 'redux-form';
import { MyProfileReducer } from './reducer_profile';

const rootReducer = combineReducers({
  myItems: ItemsReducers,
  form: formReducer,
  currentUser: CurrentUserReducer,
  myProfile: MyProfileReducer
});

export default rootReducer;