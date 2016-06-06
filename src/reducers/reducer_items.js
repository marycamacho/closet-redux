import { FETCH_MY_ITEMS } from '../actions';
import { FETCH_ITEM } from '../actions';
import { FETCH_SHARED_ITEMS } from '../actions';
import { FETCH_ALL_ITEMS } from '../actions';

const INITIAL_STATE = {list: [], item: null };

export default function(state = INITIAL_STATE, action) {

   switch(action.type) {
       case FETCH_ITEM:
           console.log(action.payload);
           return {
               ...state,
               item: action.payload.item
           };
       case FETCH_MY_ITEMS:

            return {
                ...state,
                list: action.payload.list
            };
       case FETCH_SHARED_ITEMS:

           return {
               ...state,
               list: action.payload.list
           };
       case FETCH_ALL_ITEMS:

           return {
               ...state,
               list: action.payload.list
           };
    default:
        return state;
    }
}
