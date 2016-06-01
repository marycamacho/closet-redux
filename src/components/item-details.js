/**
 * Created by mary on 5/29/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItem, deleteItem } from '../actions/index';



class ItemDetail extends Component {

    componentDidMount() {
        const id = this.props.prams.id;
    }
    render () {
        return (
            <div className="selected-item">
                Test Item Detail
            </div>
        );
    }
}


export default ItemDetail;
