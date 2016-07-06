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
                <div className="item-container" key={item._id}>
                    <Link to={"items/" + item.id}>
                        <img className="closetItem" src={item.image}/>
                    </Link>
                </div>
            )
        );
    }


    render() {
        const transitionOptions = {
          transitionName: "slide",
            transitionEnterTimeout: 1000,
            transitionLeaveTimeout: 0
        };

        return (
        <div className="panel panel-default well well-white-bg col-md-12">
            <div className="panel-heading">
                <div className="col-sm-6">
                    <h3 className="panel-title "><strong>Shared Closet</strong></h3>
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