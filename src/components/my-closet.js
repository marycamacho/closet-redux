/**
 * Created by mary on 5/29/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/index';
import { Link } from 'react-router';

class MyCloset extends Component {


    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/items/new" className="btn btn-primary">
                        Add Item
                    </Link>
                </div>
                <h3>Items</h3>
                <ul className="list-group">
                    Testing My Closet in Routes
                </ul>
            </div>
        );
    }
}


export default MyCloset;