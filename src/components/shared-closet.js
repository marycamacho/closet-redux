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
        return items.map((item) => (
                <div className="item-container" key={item.id}>
                    <Link to={"items/" + item._id}>
                        <img className="closetItem" src={item.id}/>
                    </Link>
                </div>
            )
        );
    }


    render() {
        const transitionOptions = {
          transitionName: "slide",
            transitionEnterTimeout: 1000,
            transitionLeaveTimeout: 2500
        };

        return (
        <div className="panel panel-default well well-white-bg col-md-12">
            <div className="panel-heading">
                <div className="col-sm-6">
                    <h3 class-name="panel-title "><strong>Shared Closet</strong></h3>
                </div>
                <div className=" col-sm-6">
                    <Link to="items/new" className="top20 pull-right">
                        <span className="btn btn-default ">Add Item</span>
                    </Link>
                </div>
            </div>
            <div className="panel-body required-panel">
                <div className="">
                    <div className="image-container">
                        <ReactCSSTransitionGroup {...transitionOptions}>
                        {this.renderItems()}
                        </ReactCSSTransitionGroup>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}


function mapStateToProps(state) {
    return {myItems: state.myItems};
}

export default connect(mapStateToProps, {fetchSharedItems})(SharedCloset);