/**
 * Created by mary on 5/29/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchMyItems } from '../actions';



class MyCloset extends Component {

    componentWillMount() {
        
        this.props.fetchMyItems();
    }

    /*renderItems() {
        return this.props.list.map((item) => {
            return (
                <li className="list-group-item" key={item._id}>
                    <Link to={"items/" + item._id}>
                        <span className="pull-xs-right">{item.name}</span>
                        <strong>{item.description}</strong>
                    </Link>
                </li>
            );
        });
    }*/


    render() {
        return (
            <div>

                <h3>Items</h3>
                <ul className="list-group">
                    <Link to="items/new"  className="btn btn-default pull-right">Add Item</Link>
                        
                </ul>
            </div>
        );
    }
}





export default connect(null, {fetchMyItems})(MyCloset);