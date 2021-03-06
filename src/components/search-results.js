/**
 * Created by mary on 6/4/16.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { searchItems } from '../actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



class SearchResults extends Component {

    componentDidMount() {

        if (!this.props) {
            this.props.searchItems();
        }

    }

    renderItems() {
        const items = this.props.myItems.list;
        console.log(items);

        if (!items) {
            return(
                <p>Loading...</p>
            )
        }
        return items.map((item) => (
                <div className="item-container" key={item._id}>
                    <Link to={"items/" + item._id}>
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
                        <h3 class-name="panel-title "><strong>Search Results</strong></h3>
                    </div>
                    <div className=" col-sm-6">
                        <Link to="search" className="top20 pull-right">
                            <span className="btn btn-default ">Back to Search</span>
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

export default connect(mapStateToProps, {searchItems})(SearchResults);
