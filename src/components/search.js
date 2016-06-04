/**
 * Created by mary on 5/29/16.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';

class SearchItems extends Component {


    render() {
        return (
            <div>
                <h3>Title</h3>
                <ul className="list-group">
                    Testing Search Items
                </ul>
            </div>
        );
    }
}


export default SearchItems;