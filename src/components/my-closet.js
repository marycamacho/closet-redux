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

    renderItems() {
        const items = this.props.myItems.list;
        return items.map((item) => {
            return (
                <li className="list-group-item" key={item._id}>
                    <Link to={"items/" + item._id}>
                        <span className="pull-xs-right">{item.category}</span>
                        <strong>{item.name}</strong>
                    </Link>
                </li>
            );
        });
    }


    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="items/new"  className="btn btn-default pull-right">
                        Add Item
                    </Link>
                </div>
                <h3>Items</h3>
                <ul className="list-group">
                    {this.renderItems()}

                        
                </ul>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {myItems: state.myItems};
}

export default connect(mapStateToProps, {fetchMyItems})(MyCloset);