/**
 * Created by mary on 5/29/16.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchItem, deleteItem } from '../actions/index';
import { Link } from 'react-router';

class MyProfile extends Component {


    render() {
        return (
            <div>
                <h3>My Profile</h3>
                <ul className="list-group">
                    Testing My Profile
                </ul>
            </div>
        );
    }
}


export default MyProfile;