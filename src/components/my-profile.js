/**
 * Created by mary on 5/29/16.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchItem, deleteItem } from '../actions/index';
import { Link } from 'react-router';

class MyProfile extends Component {


    render() {
        return (
            <div className="panel panel-default well well-white-bg col-md-12">
                <div className="panel-heading">
                    <h3 class-name="panel-title"><strong>My Profile</strong></h3>
                </div>
                <div className="panel-body required-panel">
                    <form className="form-horizontal">
                        <div className="col-md-4">
                            <div className="well well-white-bg">
                                <h3 className="panel-title">Account Details</h3>

                                <div className="form-group">
                                    <label>First Name</label>
                                    <input className="readOnly">Mary</input>
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input className="readOnly">Camacho</input>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input className="readOnly">mary@marycamacho.com</input>
                                </div>
                                <div className="form-group">
                                    <label>City </label>
                                    <input className="readOnly">Denver</input>
                                </div>


                            </div>
                            <div className="well well-white-bg">
                                <h3 className="panel-title">Style Profile</h3>

                                <div className="form-group">
                                    <label>Favorite Style</label>
                                    <input className="readOnly">Funky Chic</input>
                                </div>
                                <div className="form-group">
                                    <label>Height</label>
                                    <input className="readOnly">5' 8"</input>
                                </div>
                                <div className="form-group">
                                    <label>Weight</label>
                                    <input className="readOnly">148</input>
                                </div>
                                <div className="form-group">
                                    <label>Favorite Color</label>
                                    <input className="readOnly">Purple</input>
                                </div>


                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


export default MyProfile;