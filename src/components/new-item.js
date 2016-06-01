/**
 * Created by mary on 5/29/16.
 */
import React, { Component } from 'react';
import { fetchItems } from '../actions/index';
import {reduxForm} from 'redux-form';
import { createItem } from '../actions/index';


class NewItem extends Component {

    render () {


        const { fields: {name, category, description, image}, handleSubmit } = this.props;


        return (
        <form onSubmit={handleSubmit(this.props.createItem)}>
            <h3>Add an Item</h3>
            <div className={`form-group ${name.touched && name.invalid ? "has-danger" : '' }`}>
                <label>Item Name</label>
                <input type="text" className="form-control" {...name} />
                <div className="text-help">{name.touched ? name.error : ''}</div>
            </div>
            <div className={`form-group ${category.touched && category.invalid ? "has-danger" : ''}`}>
                <label>Category</label>
                <input type="text" className="form-control" {...category} />
                <div className="text-help">{category.touched ? category.error : ''}</div>
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea className="form-control" {...description} />
            </div>
            <div className={`form-group ${image.touched && image.invalid ? "has-danger" : ''}`}>
                <label>Image URL</label>
                <input type="text" className="form-control" {...image} />
                <div className="text-help">{image.touched ? image.error : ''}</div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        )
    }
    
}

function validate (values) {
    const errors = {};

    if (!values.name) {
        errors.name = 'Enter an Item Name';
    }
    if (!values.category) {
        errors.category = 'Enter a Category';
    }
    if (!values.image) {
        errors.image = 'Please enter an image URL.';
    }
    return errors;
}

//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: first is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
    form: 'NewItemForm',
    fields: ['name', 'category', 'description', 'image'],
    validate
}, null, {createItem})(NewItem);