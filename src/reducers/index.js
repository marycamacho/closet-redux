import { combineReducers } from 'redux';

import { FETCH_MY_ITEMS } from '../actions';

const rootReducer = combineReducers({
  myItems: (state = { list: [] }, action) => {
    console.log(state, action);
    switch(action.type) {
      case `${FETCH_MY_ITEMS}_FULFILLED`: {
        return {
          ...state,
          list: action.payload.items,
          selectedItem: action.payload.selectedItem
        };
      }
      default: {
        return state;
      }
    }
  }
});

export default rootReducer;
