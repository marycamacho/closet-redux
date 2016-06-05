/**
 * Created by mary on 5/29/16.
 */
import React, { Component, PropTypes } from 'react';
import { fetchItems } from '../actions/index';
import {reduxForm} from 'redux-form';
import { createItem } from '../actions/index';
import { Link } from 'react-router';
import MultiselectWrapper from './multiselect-wrapper';



const chooseColors = [
    'Red', 'Orange', 'Yellow', 'Black', 'White', 'Green', 'Blue', 'Tan', 'Purple', 'Brown', 'Beige', 'Olive', 'Pink'
];
const chooseCategories = [
    'Tops', 'Pants', 'Jeans', 'Dresses', 'Activewear', 'Accessories', 'Skirt', 'Vest', 'Jacket', 'Swimwear', 'Shoes', 'Boots', 'Sandals', 'Shorts', 'Suits', 'Outerwear', 'Lingerie'
];
const chooseStyles = [
    'Bohemian', 'Arty', 'Chic', 'Classic', 'Exotic', 'Flamboyant', 'Glamorous', 'Romantic', 'Sexy', 'Sophisticated', 'Western', 'Traditional', 'Preppy', 'Punk', 'Tomboy', 'Rocker', 'Goth'
];

class NewItem extends Component {

    static contextTypes = {
        router:PropTypes.object
    };

    onSubmit(props) {
        this.props.createItem(props).then(() => {
            //item created, navigate user to index
            this.context.router.push ('/');
        });

    }

    render () {
        const {
            fields: {name, categories, description, image, colors}, handleSubmit } = this.props;

        return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

            <h3>Add an Item</h3>
            <div className={`form-group ${name.touched && name.invalid ? "has-danger" : '' }`}>
                <label>Item Name</label>
                <input type="text" className="form-control" {...name} />
                <div className="text-help">{name.touched ? name.error : ''}</div>
            </div>
            <div className={`form-group ${categories.touched && categories.invalid ? "has-danger" : ''}`}>
                <label>Category</label>
                <input type="text" className="form-control" {...categories} />
                <div className="text-help">{categories.touched ? categories.error : ''}</div>
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
            <div className="form-group">
                <label>Colors</label>
                <div>
                    <MultiselectWrapper {...colors}
                        data={chooseColors}
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>
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
    fields: ['name', 'categories', 'description', 'image', 'colors'],
    initialValues: {
        colors: [ 'Red' ]
    },
    validate
}, null, {createItem})(NewItem);