/**
 * Created by mary on 5/29/16.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchItem, deleteItem } from '../actions/index';




class ItemDetail extends Component {

    static contextTypes = {
        router:PropTypes.object
    };

    componentWillMount() {

        this.props.fetchItem(this.props.params.id);
    }
    
    onDeleteClick() {
        this.props.deleteItem(this.props.params.id).then(() => {
            //item deleted, navigate user to index
            this.context.router.push('/');
        });
    }

    render () {
        const {item} = this.props;
        console.log(this.props.item);
        if(!this.props.item) {
            return <div>Loading...</div>
        }
        return (
            <div className="selected-item">
                <h3>{item.name}</h3>
                <div
                    className='btn btn-danger pull-xs-right'
                    onClick={this.onDeleteClick.bind(this)}>
                    Delete Item
                </div>
                <img src={item.image} />
                <span>{item.category}</span>
                <p>{item.description}</p>


            </div>
        );
    }
}

function mapStateToProps(state) {
    return {item: state.myItems.item}
}

export default connect(mapStateToProps, { fetchItem, deleteItem }) (ItemDetail);
