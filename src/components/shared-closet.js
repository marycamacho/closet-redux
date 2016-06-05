/**
 * Created by mary on 5/29/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchSharedItems } from '../actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



class SharedCloset extends Component {

    componentWillMount() {

        this.props.fetchSharedItems();

       
    }

    renderItems() {
        const items = this.props.myItems.list;
        console.log(items);
        return items.map((item) => {
            return (
                <li className="list-group-item" key={item.id}>
                    <Link to={"items/" + item._id}>

                        <strong>{item.id}</strong>
                    </Link>
                </li>
            );
        });
    }


    render() {
        const transitionOptions = {
          transitionName: "fade",
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 2500
        };

        return (
            <div>
                <div className="text-xs-right">
                    <Link to="items/new"  className="btn btn-default pull-right">
                        Add Item
                    </Link>
                </div>
                <h3>Items</h3>
                <ul className="list-group">
                    <ReactCSSTransitionGroup {...transitionOptions}>
                    {this.renderItems()}
                    </ReactCSSTransitionGroup>
                </ul>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {myItems: state.myItems};
}

export default connect(mapStateToProps, {fetchSharedItems})(SharedCloset);