import { FETCH_MY_ITEMS } from '../actions';
//import { FETCH_ITEM } from '../actions';

const INITIAL_STATE = { list: [], selectedItem: null };

export default function(state = INITIAL_STATE, action) {

   switch(action.type) {
    case FETCH_MY_ITEMS:
        return {
            ...state,
            list: action.payload.data,
            selectedItem: action.payload.selectedItem
        };

    default:
        return state;
    }
}
