/**
 * Created by mary on 5/29/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/index';
import { Link } from 'react-router';

class AddClosetItem extends Component {


    render() {
        return (
        <div>
            <h3>New Item</h3>
            <ul className="list-group">
                Testing New Item
            </ul>
        </div>
        );
    }
}


export default AddClosetItem;