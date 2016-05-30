/**
 * Created by mary on 5/29/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/index';
import { Link } from 'react-router';

class MyCloset extends Component {

    renderItems() {
        return this.props.items.map((item) => {
            return (
                <li className="list-group-item" key={item.id}>
                    <Link to={"items/" + item.id}>
                        <span className="pull-xs-right">{item.categories}</span>
                        <strong>{item.name}</strong>
                    </Link>
                </li>
            );
        });
    }


    render() {
        return (
            <div>

                <h3>Items</h3>
                <ul className="list-group">
                    Testing My Closet in Routes
                    /*{this.renderItems}*/
                </ul>
            </div>
        );
    }
}


export default MyCloset;