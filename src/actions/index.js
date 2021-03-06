/**
 * Created by mary on 5/25/16.
 */

export const FETCH_MY_ITEMS = 'FETCH_MY_ITEMS';
export const FETCH_ALL_ITEMS = 'FETCH_ALL_ITEMS';
export const SEARCH_ITEMS = 'SEARCH_ITEMS';
export const CREATE_ITEM = 'CREATE_ITEM';
export const FETCH_ITEM = 'FETCH_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_SHARED_ITEM = 'ADD_SHARED_ITEM';
export const REMOVE_SHARED_ITEM = 'REMOVE_SHARED_ITEM';
export const FETCH_CURRENT_USER = 'FETCH_USER';
export const FETCH_SHARED_ITEMS = 'FETCH_SHARED_ITEMS';
export const FETCH_PROFILE = 'FETCH_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';


export function fetchUser () {

    const request = $.getJSON('/fetch_current_user').then(function (user) {
        return {
            user
        };
    });

    return {
        type: FETCH_CURRENT_USER,
        payload: request
    };
}

export function fetchProfile () {

    const request = $.getJSON('/fetch-profile').then(function (result) {
        return {
            result
        };
    });

    return {
        type: FETCH_PROFILE,
        payload: request
    };
}

export function updateProfile () {

    const request = $.post('/update-profile').then(function (result) {
        return {
            result
        };
    });

    return {
        type: UPDATE_PROFILE,
        payload: request
    };
}

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

export function fetchAllItems() {

    const request = $.getJSON('/all_items').then(function (result) {
        return {
            list: result
        };
    });

    return {
        type: FETCH_ALL_ITEMS,
        payload: request
    };
}

export function fetchSharedItems() {

    const request = $.getJSON('/shared_items').then(function (result) {
        return {
            list: result
        };
    });

    return {
        type: FETCH_SHARED_ITEMS,
        payload: request
    };
}

export function searchItems(props) {
    const request = $.getJSON('/search_items', props).then(function (result) {
        return {
            list: result
        };
    });

    return {
        type: SEARCH_ITEMS,
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

    const request = $.getJSON(`/fetch_item/${id}` ).then(function (item) {
        return {
            item
        };
    });

    return {
        type: FETCH_ITEM,
        payload: request
    };
}

export function deleteItem (id) {
    const request = $.post(`/delete_item/${id}`).then(function (result) {
        return {}
    });

    return {
        type: DELETE_ITEM,
        payload: request
    };
}

export function addSharedItem (id) {
    const request = $.post(`/add_shared/${id}`).then(function (result) {
        return {}
    });

    return {
        type: ADD_SHARED_ITEM,
        payload: request
    };
}

export function removeSharedItem (id) {
    const request = $.post(`/remove_shared/${id}`).then(function (result) {
        return {}
    });

    return {
        type: REMOVE_SHARED_ITEM,
        payload: request
    };
}
