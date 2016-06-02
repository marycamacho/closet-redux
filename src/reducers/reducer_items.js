import { FETCH_MY_ITEMS } from '../actions';
//import { FETCH_ITEM } from '../actions';

const INITIAL_STATE = {list: []};

export default function(state = INITIAL_STATE, action) {

   switch(action.type) {
       case FETCH_MY_ITEMS:
        console.log(action.payload);
        return {
            ...state,
            list: action.payload.list

        };

    default:
        return state;
    }
}
