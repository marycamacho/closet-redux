import { FETCH_CURRENT_USER } from '../actions';

const INITIAL_STATE = {user: null };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_CURRENT_USER:
            console.log(`actions${action.payload}`);
            return {
                ...state,
                user: action.payload.user
            };
    default:
        return state;
    }
}