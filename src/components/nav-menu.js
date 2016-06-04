/**
 * Created by mary on 5/29/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/index';
import { Link } from 'react-router';
import { fetchUser } from '../actions/index';


class NavMenu extends Component {

    componentWillMount() {
        this.props.fetchUser();
    }


    render() {
        console.log(this.props.user);

        if(!this.props.user){
            return <div>Loading...</div>
        }
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

                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="a-mimic"><i>Welcome {this.props.user.user}</i> </li>
                        <li><Link to="/my-profile" className="">
                            My Profile
                        </Link></li>
                        <li><a href="/logout" className="">
                            Logout
                        </a></li>
                    </ul>

                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{user: state.currentUser.user}
}

export default connect(mapStateToProps, { fetchUser} ) (NavMenu);
