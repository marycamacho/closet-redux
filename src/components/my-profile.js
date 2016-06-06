/**
 * Created by mary on 5/29/16.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { fetchProfile, } from '../actions/index';
import { Link } from 'react-router';

class MyProfile extends Component {


    componentWillMount() {
        this.props.fetchProfile();
    }

    //const myProfile = this.props.profile.data;



    render() {
        return (
            <div className="panel panel-default well well-white-bg col-md-12">
                <div className="panel-heading">
                    <div className="col-sm-6">
                         <h3 class-name="panel-title "><strong>My Profile</strong></h3>
                    </div>
                    <div className=" col-sm-6">
                        <Link to={"edit-profile"} className="top20 pull-right">
                             <span className="btn btn-default ">Edit Profile</span>
                        </Link>
                    </div>
                </div>
                <div className="panel-body required-panel">
                    <form className="form-horizontal">

                            <div className="well well-white-bg">

                                <h3 className="panel-title">Account Details</h3>

                                <div className="form-group">
                                    <div className="col-md-12">
                                    <label>First Name</label>
                                    <div className="required-field-block ">
                                        <input className=" form-control " readOnly placeholder="Mary"></input>
                                    </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-md-12">
                                        <label>Last Name</label>
                                        <div className="required-field-block ">
                                            <input className=" form-control " readOnly placeholder="Camacho"></input>

                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <label>Email</label>
                                        <div className="required-field-block ">
                                            <input className=" form-control readOnly"></input>
                                            <div className="required-icon">
                                                <div className="text">*</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <label>Address</label>
                                        <div className="required-field-block ">
                                            <input className=" form-control readOnly"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <label>City</label>
                                        <div className="required-field-block ">
                                            <input className=" form-control readOnly"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <label>State</label>
                                        <div className="required-field-block ">
                                            <input className=" form-control readOnly"></input>
                                            <div className="required-icon">
                                                <div className="text">*</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <label>Zip</label>
                                        <div className="required-field-block ">
                                            <input className=" form-control readOnly"></input>
                                            <div className="required-icon">
                                                <div className="text">*</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="well well-white-bg">
                                <h3 className="panel-title">Style Profile</h3>


                                <div className="form-group">
                                    <div className="col-md-12">
                                        <label>Favorite Style</label>
                                        <div className="required-field-block ">
                                            <input className=" form-control readOnly"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <label>Height</label>
                                        <div className="required-field-block ">
                                            <input className=" form-control readOnly"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <label>Weight</label>
                                        <div className="required-field-block ">
                                            <select className=" form-control readOnly"></select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <label>Favorite Color</label>
                                        <div className="required-field-block ">
                                            <input className=" form-control readOnly"></input>

                                        </div>
                                    </div>
                                </div>

                            </div>

                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {myProfile: state.myProfile};
}


export default connect(mapStateToProps, {fetchProfile}) (MyProfile) ;