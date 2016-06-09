/**
 * Created by mary on 5/29/16.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { fetchProfile, } from '../actions/index';
import { updateProfile, } from '../actions/index';
import { Link } from 'react-router';

class MyProfile2 extends Component {


    componentWillMount() {
        this.props.fetchProfile();
        console.log(this.props);
    }

    static contextTypes = {
        router:PropTypes.object
    };

    onSubmit(props) {
        this.props.updateProfile(props).then(() => {
            //item updated, update fields from db to state
            this.props.fetchProfile();
        });

    }
  

    render() {

        const {
            fields: {email, address, city, st, zip, favStyle, height, weight, favColor},
            handleSubmit
        } = this.props;

        console.log(this.state);


        return (
            <div className="panel panel-default well well-white-bg col-md-12">
                <div className="panel-heading">
                    <div className="col-sm-6">
                         <h3 className="panel-title "><strong>My Profile</strong></h3>
                    </div>
                    
                </div>
                <div className="panel-body required-panel">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form-horizontal">

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
                                <div className={`form-group ${email.touched && email.invalid ? "has-danger" : '' }`}>
                                    <div className="col-md-12">
                                        <label>Email</label>
                                        <div className="required-field-block ">
                                            <input className=" form-control "{...email}></input>
                                            <div className="required-icon">
                                                <div className="text">*</div>
                                            </div>
                                            <div className="text-help">{email.touched ? email.error : ''}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <label>Address</label>
                                        <div className="required-field-block ">
                                            <input className=" form-control "{...address}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <label>City</label>
                                        <div className="required-field-block ">
                                            <input className=" form-control "{...city}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className={`form-group ${st.touched && st.invalid ? "has-danger" : '' }`}>
                                    <div className="col-md-12">
                                        <label>State</label>
                                        <div className="required-field-block ">
                                            <input className=" form-control "{...st}></input>
                                            <div className="required-icon">
                                                <div className="text">*</div>
                                            </div>
                                            <div className="text-help">{st.touched ? st.error : ''}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`form-group ${zip.touched && zip.invalid ? "has-danger" : '' }`}>
                                    <div className="col-md-12">
                                        <label>Zip</label>
                                        <div className="required-field-block ">
                                            <input className=" form-control "{...zip}></input>
                                            <div className="required-icon">
                                                <div className="text">*</div>
                                            </div>
                                            <div className="text-help">{zip.touched ? zip.error : ''}</div>
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
                                            <input className=" form-control "{...favStyle}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <label>Height</label>
                                        <div className="required-field-block ">
                                            <input className=" form-control "{...height}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <label>Weight</label>
                                        <div className="required-field-block ">
                                            <select className=" form-control "{...weight}></select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <label>Favorite Color</label>
                                        <div className="required-field-block ">
                                            <input className=" form-control "{...favColor}></input>

                                        </div>
                                    </div>
                                </div>

                            </div>

                    </form>
                </div>
            </div>
        )

    }
}

function validate (values) {
    const errors = {};

    if (!values.email) {
    errors.name = 'Enter an Item Name';
}
    if (!values.st) {
    errors.category = 'Enter a Category';
}
    if (!values.zip) {
    errors.image = 'Please enter an image URL.';
}
    return errors;
}

function mapStateToProps(state) {
    console.log(state, 'map');

    return {myProfile: state.myProfile,
    initialValues: state.myProfile};
}


export default reduxForm({
    form: 'updateProfileForm',
    fields: ['email', 'address', 'city', 'st', 'zip', 'favStyle', 'height', 'weight', 'favColor' ],

    validate
}, mapStateToProps, { fetchProfile })(MyProfile2);