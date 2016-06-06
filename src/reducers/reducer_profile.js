import { FETCH_PROFILE } from '../actions';

const INITIAL_STATE = {myProfile: [] };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PROFILE:
            console.log(`actions${action.payload}`);
            return {
                ...state,
                myProfile: action.payload.myProfile
            };
    default:
        return state;
    }
}