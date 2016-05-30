/**
 * Created by mary on 5/29/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/index';
import { Link } from 'react-router';


class NavMenu extends Component {


    render() {
        return (
            <div className="navbar navbar-default navbar-fixed-top ">
                <div className="container">
                    <ul className="nav navbar-nav">
                        <li><Link to="/" className="">
                            My Closet
                        </Link></li>
                        <li><Link to="/items/new" className="">
                            Add Item
                        </Link></li>
                        <li><Link to="/search" className="">
                            Search Items
                        </Link></li>
                        <li><Link to="/my-profile" className="">
                            My Profile
                        </Link></li>
                    </ul>

                </div>
            </div>
        );
    }
}


export default NavMenu;
