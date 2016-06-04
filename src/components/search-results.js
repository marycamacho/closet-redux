/**
 * Created by mary on 6/4/16.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';

class SearchResults extends Component {


    render() {
        return (
            <div>
                <h3>Title</h3>
                <ul className="list-group">
                    Search Results
                </ul>
            </div>
        );
    }
}


export default SearchResults;
