/**
 * Created by mary on 5/25/16.
 */

export const FETCH_MY_ITEMS = 'FETCH_MY_ITEMS';
export const FETCH_SEARCH_ITEMS = 'FETCH_SEARCH_ITEMS';
export const CREATE_ITEM = 'CREATE_ITEM';
export const FETCH_ITEM = 'FETCH_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';



export function fetchMyItems() {

    const request = $.getJSON('/my_items').then(function (result) {
        return {
            list: result

        };
    });

    return {
        type: FETCH_MY_ITEMS,
        payload: request
    };
}

export function fetchSearchItems() {
    //Todo: const request = ;

    return {
        type: FETCH_SEARCH_ITEMS,
        payload: request
    };
}

export function createItem (props) {

    const request = $.post('/newItem', props).then(function (result){
        return {
            result
        }
    });

    return {
        type: CREATE_ITEM,
        payload: request
    };
}

export function fetchItem (id) {
    //Todo: const request = ;

    return {
        type: FETCH_ITEM,
        payload: request
    };
}

export function deleteItem (id) {
    //Todo: const request = ;

    return {
        type: DELETE_ITEM,
        payload: request
    };
}
