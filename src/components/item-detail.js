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

    render () {
        const {item} = this.props;
        console.log(this.props.item);
        if(!this.props.item) {
            return <div>Loading...</div>
        }
        return (
            <div className="panel panel-default well well-white-bg col-md-12 ">
                <div className="panel-heading">
                    <div className="col-sm-6">
                        <h3 class-name="panel-title "><strong>Item Detail</strong></h3>
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
                                <img className="img-fluid detail-image" src={item.image} />
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
                                    <div className="btn btn-default"
                                        onClick={this.onDeleteClick.bind(this)}>
                                        Delete Item
                                    </div>
                                </div>
                                <div className="background"></div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {item: state.myItems.item}
}

export default connect(mapStateToProps, { fetchItem, deleteItem }) (ItemDetail);
