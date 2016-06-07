/**
 * Created by mary on 5/29/16.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchItem, deleteItem } from '../actions/index';
import { Link } from 'react-router';





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

    // this function should return differing buttons based on the data in the item

    renderButtons() {
        const item = this.props.item;
        if(item.isMyItem == true) {
            return (
                <div className="btn btn-default"
                     onClick={this.onDeleteClick.bind(this)}>
                    Delete Item
                </div>
            )
        } else if (item.isSharedItem == true) {
            return (
                <div className="btn btn-default"
                     onClick={this.onDeleteClick.bind(this)}>
                    Remove from Shared Closet
                </div>
            )
        } else {
            return (
                <div className="btn btn-default"
                     onClick={this.onDeleteClick.bind(this)}>
                    Add to Shared Closet
                </div>
            )

        }
    }

    render () {
        const {item} = this.props;


        if(!this.props.item) {
            return <div>Loading...</div>
        } else {
            console.log(item.isMyItem);
            return (
                <div className="panel panel-default well well-white-bg col-md-12 ">
                    <div className="panel-heading">
                        <div className="col-sm-6">
                            <h3 className="panel-title "><strong>Item Detail</strong></h3>
                        </div>
                        <div className=" col-sm-6">
                            <Link to={"/"} className="top20 pull-right">
                                <span className="btn btn-default ">Return to Closet</span>
                            </Link>
                        </div>
                    </div>
                    <div className="panel-body required-panel">

                        <div className="well well-white-bg">

                            <h3 className="panel-title">{item.name}</h3>

                            <div className=" row my-row selected-item">
                                <div className="col-sm-5 image-col">
                                    <img className="img-fluid detail-image" src={item.image}/>
                                    <p> </p>
                                </div>
                                <div className="col-sm-7 ">
                                    <div className="content">
                                        <p>Category: {item.category}</p>
                                        <p>Style: {item.style}</p>
                                        <p>Size: {item.size}</p>
                                        <p>Main Color: {item.color}</p>
                                        <p>Description: {item.description}</p>
                                        <br /><br />
                                        {this.renderButtons()}

                                    </div>
                                    <div className="background"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {item: state.myItems.item}
}

export default connect(mapStateToProps, { fetchItem, deleteItem }) (ItemDetail);
